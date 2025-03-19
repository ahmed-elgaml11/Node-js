import { Request, Response, NextFunction } from "express";
export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if (req.session.user) {
        return next();
    }
    req.flash('error', 'You must be logged in .');  
    res.redirect('/auth/login');
    
  };