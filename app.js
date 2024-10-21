// import 
const express = require('express')
const mongoose = require('mongoose')
const taskrouter = require('./routers/taskRouter')





// init app and middlewares
const app = express();
app.set('view engine','ejs')
app.set('views',__dirname+'/views')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}));




// connect to db
const uri = "mongodb+srv://a7medelgaml11:190120123@learn-mongo-db.uuvf8.mongodb.net/ToDo?retryWrites=true&w=majority&appName=learn-mongo-db";
mongoose.connect(uri)
.then(() => {
    app.listen(5005, () => { 
        console.log("connected at 5005")
    })
})


// route handlers

app.use(taskrouter)

app.use((req,res)=>{
    res.status(404).send('not found')
    // res.status(404).render('404')

})
