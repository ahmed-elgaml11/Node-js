import express, { Response } from 'express';
const router = express.Router();
import { isAuthenticated } from '../middlewares/authorization'
import upload from '../middlewares/upload';
import {cloudinaryUploadImage, cloudinaryRemoveImage} from '../utils/cloudinary'
import path from 'path'
import fs, { PathLike, unlink } from 'fs'
import { promise } from 'zod';
import {addImage, findImages, findImage, deleteImage} from '../services/imageServices'
import mongoose from 'mongoose';


router.get('/upload', isAuthenticated,  (req, res) => {
    res.render('upload')
})

router.post('/upload', upload.array('image', 10), isAuthenticated, async (req, res) => {

    if (!req.files || !Array.isArray(req.files)) {
        req.flash("error", "No images uploaded.");
        return res.redirect("/upload");
    }
    if(req.files.length > 10 ){
        req.flash("error", "you can upload up to 10 images");
        return res.redirect("/upload");
    }

    try {
        const uploadedImages = await Promise.all(
            req.files.map(async (file) => {
                try{
                    const result = await cloudinaryUploadImage(file.path);
                    let body = {
                        userId: req.session.user!,
                        url: result.secure_url,
                        publicId: result.public_id
                    }
                    await addImage(body);
                    await fs.promises.unlink(file.path);
                    return  result.secure_url ;    
                }
                // to handle individul files errors
                catch(err){
                    console.error(`Failed to process ${file.filename}` , err);
                    await fs.promises.unlink(file.path)
                    return null
                }
            })
        )   
        const successImages = uploadedImages.filter(url => url!== null)
        req.flash('success', `Successfully uploaded ${successImages.length}/${req.files.length} images`);
        res.redirect('/upload')
    }
    catch(err){
        console.log(err);
        req.flash('error', 'there is something wrong in uploading the images');
        res.redirect('/upload')
    }

})

router.get('/images', isAuthenticated, async (req, res) => {
    const id = new mongoose.Types.ObjectId(req.session.user);
    try{    
        const images = await findImages(id )
        res.render('images', { images });

    }catch(err){
        console.log(err);
        req.flash('error', 'cant find images')
        res.redirect('/upload');
    }
})

router.delete('/images/:id', isAuthenticated, async (req, res) =>  {
    const id = req.params.id;
    try{
        const image = await deleteImage(id);
        if(!image){
            res.sendStatus(404);
            return;
        }
        await cloudinaryRemoveImage(id);
        res.sendStatus(200);
        return
        
    }catch(err){
        res.sendStatus(500);
        return;
    }
})







export default router