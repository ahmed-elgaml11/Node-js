import mongoose from "mongoose";
const schema = mongoose.Schema;
import {todoRes} from '../../interfaces/todo'
const todoSchema = new schema<todoRes>({
    content: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    }
})
export const Todo = mongoose.model<todoRes>('Todo', todoSchema)



