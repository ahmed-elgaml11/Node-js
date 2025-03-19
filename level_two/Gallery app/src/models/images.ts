import mongoose from "mongoose";
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId ,
    },
    publicId: {
        type: String, 
    },
    url: {
        type: String, 
    }
})

export default mongoose.model('Image', imageSchema)