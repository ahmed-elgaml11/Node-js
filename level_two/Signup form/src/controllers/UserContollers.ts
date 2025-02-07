import {Request, Response} from 'express';
import { UserSchema } from '../schema/UserSchema';
import {fromZodError} from'zod-validation-error';


export const form = (req: Request, res: Response) => {
        const errs = req.flash('msg')
        res.render('index',{errs})
    
}
export const add_data = (req: Request, res: Response) => {
    const result = UserSchema.safeParse(req.body)
    if(!result.success){
        req.flash('msg', fromZodError(result.error).message);
        res.redirect('/user/')
        return;
    }
    res.json(200).send("SUCCESSFUL");

}

