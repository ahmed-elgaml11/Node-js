"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const TaskSckema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, 'the length of the task name must be at least consists of 3 characters']
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
const Task = mongoose_1.default.model('Task', TaskSckema);
exports.default = Task;
