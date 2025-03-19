import {userSchema} from '../schema/userSchema';
import   {Request, Response, NextFunction} from 'express';
export const validateUserSchema = (req: Request, res: Response, next: NextFunction) => {
    const result = userSchema.safeParse(req.body);
    if(!result.success){
        const errs = result.error.issues.map (err => err.message);
        console.log(errs);
        res.render('signup', {error: errs })
        return;
    }
    next();
}