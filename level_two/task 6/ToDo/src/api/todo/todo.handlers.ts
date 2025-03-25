import { Request, Response, NextFunction } from 'express';
import {todoReq, todoRes} from '../../interfaces/todo'
import {Todo} from './todo.model'
import mongoose from 'mongoose';

export const findAll = async (req: Request, res: Response<todoRes[]>, next: NextFunction) => {
    try{
        const todos = await Todo.find()
        res.status(200).json(todos)

    }catch(err){
        next(err);
    }
}

export const findOne = async (req: Request<{id: string}, todoRes, {}>, res: Response<todoRes>, next: NextFunction) => {
    const {id} = req.params;
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(400);
            throw new Error('Invalid ID format')
        }
        const todo = await Todo.findById(id)    
        if(!todo){
            res.status(404);
            throw new Error(`Todo with id "${id}" not found.`);
        }
        res.json(todo)
    }catch(err){
        next(err)
    }
}

export const createOne = async (req: Request<{}, todoRes, todoReq>, res: Response<todoRes>, next: NextFunction) => {
    try{
        const doc = new Todo(req.body)
        await doc.save();
        res.status(201);
        res.json(doc)
    }
    catch(err) {
        next(err)
    }
}

export const updateOne = async (req: Request<{id: string}, todoRes, todoReq>, res: Response, next: NextFunction) => {
    const {id} = req.params;
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(400);
            throw new Error('Invalid ID format')
        }
        const todo = await Todo.findByIdAndUpdate(id, req.body)
        if(!todo){
            res.status(404);
            throw new Error(`Todo with id "${id}" not found.`);
        }
        res.status(200).json(todo)

    }catch(err){
        next(err);
    }

}

export const deleteOne = async (req: Request<{id: string}>, res: Response, next: NextFunction) => {
    const {id} = req.params
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(400);
            throw new Error('Invalid ID format')
        } 
        const todo = await Todo.findByIdAndDelete(id)
        if(!todo){
            res.status(404)
            throw new Error(`Todo with id "${id}" not found.`);
        }
        res.status(204).end();
    }
    catch(error){
        next(error)
    }
}