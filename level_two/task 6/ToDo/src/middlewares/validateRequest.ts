import {todoSchema} from '../api/todo/todo.schema'
import { Request, Response, NextFunction } from 'express'

export const validateRequest =  async (req: Request, res: Response, next: NextFunction) => {
    const result = todoSchema.safeParse(req.body)
    if(!result.success){
        res.status(422)
        next(result.error);
    }
    next();
}