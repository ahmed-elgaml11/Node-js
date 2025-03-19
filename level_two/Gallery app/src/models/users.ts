import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String, 
        required: true
    }
})

export default mongoose.model('User', userSchema)