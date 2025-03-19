import mongoose from 'mongoose'
import Image from '../models/images'
type imageDB = {
    userId: mongoose.Types.ObjectId , 
    publicId: string,
    url: string
}
export const addImage = async (body: imageDB) => {
    const image = new Image(body)
    return image.save();
    
}


export const findImages = async (id: mongoose.Types.ObjectId) => {
    return Image.find({ userId: id } )

}
export const findImage = async (id: string) => {
    return Image.findOne({ publicId: id } )
}

export const deleteImage = async (id: string) => {
    return Image.findOneAndDelete({publicId: id})
}