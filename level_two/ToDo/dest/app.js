"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// imorting
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = require("dotenv");
const path_1 = __importDefault(require("path"));
const TaskRouter_1 = __importDefault(require("./routes/TaskRouter"));
// initialize the app and the middlewares
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '..', 'views'));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
// connect to db
const uri = process.env.MONGO_URI;
const port = 7777;
if (!uri) {
    console.error('Error: MONGO_URI is not defined in the environment variables.');
    process.exit(1);
}
mongoose_1.default.connect(uri)
    .then(() => {
    app.listen(port, () => {
        console.log('Server is running on port ' + port);
    });
})
    .catch(err => console.log(`can not connect to database on port  ${port} : ${err}`));
// route handlers
app.use('/task', TaskRouter_1.default);
