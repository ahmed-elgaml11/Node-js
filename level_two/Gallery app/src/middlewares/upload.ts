import multer, { FileFilterCallback } from 'multer'
import { Request, Response, NextFunction } from "express";
import path from 'path';
import fs from 'fs'

const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // const dirPath = path.join(__dirname, '..', '..', 'uploads')
        cb(null, uploadDir);  
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback ) : void => {
    if(!file){
        return cb(new Error("No images Uploaded!") as unknown as null, false);
    }
    if (!file.mimetype || !file.mimetype.startsWith('image/')) {
        return cb(new Error("Only images are allowed!") as unknown as null, false);
    }
    cb(null, true);
};

const upload = multer({ storage: storage,  fileFilter: fileFilter, limits: { fileSize: 10 * 1024 * 1024 }});
export default upload