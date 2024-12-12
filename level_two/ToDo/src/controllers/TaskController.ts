import Task from '../models/TaskModel'
import { Request, Response } from 'express';
import {TaskData} from '../dto/body'
import { validationResult } from 'express-validator';
import { ObjectId } from 'mongodb';




export const all_tasks = (req: Request, res: Response) => {
    Task.find()
    .then ((tasks) => {
      if(!tasks){
          res.status(500).json({err: "there is a problem for finding the documents"})
      }
      else{
          res.render('index', {data: tasks})
      }
  })
    .catch((err) => {
    console.error(err);
    res.status(500).send("Error retrieving tasks");
  });
}

export const create_task = (req: Request, res: Response) => {
        res.render('create')
}


export const add_task = (req: Request<{}, {}, TaskData>, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
           res.status(400).json({ errors: errors.array() });
           return;
        }
        let task = new Task(req.body)
        task.save()
        .then ((result) => {
            if(!result){
                res.status(500).json({err: "there is a problem for saving the document"})
            }
            else{
                res.redirect('/task/')
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error adding task");
        });
}

export const get_task = (req: Request, res: Response) => {
    let id = req.params.id;
    if(ObjectId.isValid(id)){
        Task
        .findById(id)
        .then((task) => {
            if(!task){
                res.status(400).json({err: "Task not found"})
            }
            else{
                res.render('details',{task})
            }

        })
        .catch(err => console.log(err))
    }
    else{
        res.status(400).json({err: "not valid id"})
    }
}

export const delete_task = (req: Request, res: Response) => {
        let id = req.params.id;
        if(ObjectId.isValid(id)){
            Task
            .findByIdAndDelete(id)
            .then((result) => {
                if(!result){
                    res.status(400).json({err: "Task not found"})
                }
                else{
                    res.json({redirect : '/task/'})
                }
            })
            .catch(err => console.log(err))
        }
        else{
            res.status(400).json({err: "not valid id"})
        } 
}
