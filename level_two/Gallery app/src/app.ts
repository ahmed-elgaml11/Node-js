import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(__dirname,'../config.env')});
import session from 'express-session';
import mongoose from 'mongoose';
import flash from 'connect-flash';
import {configureCloudinary} from './utils/cloudinary'




const uri = process.env.DATABASE
main()
.then(() => console.log('Connected to db' ))
.catch(err => console.log(err));


async function main() {
    if (!uri) {
        console.error('Error: MONGO_URI is not defined in the environment variables.');
        process.exit(1); 
    }
    await mongoose.connect(uri);
}








const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views')
app.use(express.urlencoded({ extended: true}));
app.use(express.json())
app.use(session({
    secret: process.env.SECRET as string,
    resave: false,
    saveUninitialized: false
}))
app.use(flash())

app.use(async(req, res, next) => {
    res.locals.error=req.flash('error');
    res.locals.success=req.flash('success');
    next();
})

configureCloudinary();

import authRoutes from './routes/authRoutes'
import userRoutes from './routes/userRoutes'

app.use('/auth', authRoutes)
app.use('/', userRoutes)


const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
