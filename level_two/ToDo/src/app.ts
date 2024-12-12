// imorting
import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import path from 'path';
import router from './routes/TaskRouter';





// initialize the app and the middlewares
config();
const app = express();
app.set('view engine','ejs')
app.set('views', path.join(__dirname,'..','views'));
app.use(express.urlencoded({ extended: true }));    
app.use(express.static('public'))
app.use(express.json());  
app.use('/task', router)



// connect to db
const uri = process.env.MONGO_URI;
const port = 7777;

if (!uri) {
    console.error('Error: MONGO_URI is not defined in the environment variables.');
    process.exit(1); 
  }
mongoose.connect(uri)
.then(() => {
    app.listen(port, () =>  {
        console.log('Server is running on port ' + port);
    });
})
.catch(err => console.log(`can not connect to database on port  ${port} : ${err}`));














