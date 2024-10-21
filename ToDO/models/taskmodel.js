const mongoose = require ('mongoose')
const Schema = mongoose.Schema


const taskSchema = new Schema ({
    name: {
        type: String ,
        required: true,
        minlength: [3,'the length of the task name must be at least consists of 3 characters']
    },
    date: {
        type: Date,
        required: true

    },
    description: {
        type: String,
        required: true
    }
})

const Task = mongoose.model('Task',taskSchema)
module.exports= Task