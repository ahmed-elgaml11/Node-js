import express from 'express';
import path from 'path'
import dotenv from 'dotenv';
dotenv.config({ path: path.join(__dirname, "../config.env") })
import session from 'express-session';
import flash from 'connect-flash';
import cookieParser from 'cookie-parser';

import UserRoutes from './routes/UserRoutes'






const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(cookieParser('secret cookie'));
app.use(session({
    secret:'secret session',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000*60*60 } // false for http, true for https
 }));
 app.use(flash())

 app.use('/user', UserRoutes)








const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});