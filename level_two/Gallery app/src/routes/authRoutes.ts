import express from 'express';
import bcrypt from 'bcrypt'
const router = express.Router();
import {validateUserSchema as userValidation} from '../middlewares/validateUser'
import {addUser, findUser, } from '../services/userServices'
import { userInput, userDb }from '../types/users/users'
// /auth

router.get('/register', (req, res) => {
    res.render('signup')
})
router.post('/register', userValidation,  async (req, res) => {
    const {email, password}: userInput = req.body;
    try{
        const user = await findUser(email); 
        if(user){
            req.flash('error', 'this email is exists')
            return res.redirect('/auth/register')    
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        let data : userInput = { email, password: hashedPassword };
        await addUser (data)
        req.flash('success', 'you are registerd successfully')
        res.redirect('/auth/login')
    }
    catch(err){
        console.log(err);
        req.flash('error', 'theree is something wrong with creating your account')
        res.redirect('/auth/register')
    }
})
router.get('/login', (req, res) => {
    res.render('login')
})
router.post('/login', userValidation, async (req, res) => {
    const { email, password }: userInput = req.body;
    try{
        const user = await findUser(email);
        if(!user){
            req.flash('error', 'this email is not exists')
            return res.redirect('/auth/login')    
        }
        const same = await bcrypt.compare(password, user.password)
        if(!same){
            req.flash('error', 'incorrect password');
            res.redirect('/auth/login');
            return;
        }
        req.session.user = user._id;
        req.flash('success', 'you are logged in successfully')
        res.redirect('/upload')
    }catch(err){
        console.log(err);
        req.flash('error', 'there is something wrong with login');
        res.redirect('/auth/login')
    }
})
router.get('/logout', (req, res) => {
    delete req.session.user
    res.redirect('/auth/login')
})



export default router 

