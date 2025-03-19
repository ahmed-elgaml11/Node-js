var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(__dirname, '../config.env') });
import session from 'express-session';
import mongoose from 'mongoose';
let uri = process.env.DATABASE;
if (!uri) {
    console.error('Error: MONGO_URI is not defined in the environment variables.');
    process.exit(1);
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose.connect(uri);
    });
}
main()
    .then(() => console.log('Connected to db'))
    .catch(err => console.log(err));
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'fcgdcfg',
    resave: false,
    saveUninitialized: false
}));
app.use((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
}));
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
app.use('/auth', authRoutes);
app.use('/', userRoutes);
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
