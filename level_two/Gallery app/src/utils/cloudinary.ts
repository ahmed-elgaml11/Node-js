import {v2 as cloudinary} from 'cloudinary';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname,'../config.env')});

export const configureCloudinary = () => {
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
    });

};

export const cloudinaryUploadImage = async (filePath: string) => {
    try{

        const data =  await cloudinary.uploader.upload(filePath, {
            resource_type: 'auto'
        })
        return data;    
    }
    catch(err){
         throw err
    }
}

export const cloudinaryRemoveImage = async (imageID: string) => {
    try{
        const data =  await cloudinary.uploader.destroy(imageID, {
            resource_type: 'auto'
        })
        return data;    
    }
    catch(err){
        return err
    }
}