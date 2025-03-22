import mongoose from 'mongoose'

export type imageDB = {
    userId: mongoose.Types.ObjectId , 
    publicId: string,
    url: string
}
