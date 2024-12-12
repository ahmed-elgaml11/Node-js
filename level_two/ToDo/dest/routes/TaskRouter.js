"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const express_validator_1 = require("express-validator");
const TaskController_1 = require("../controllers/TaskController");
router.get('/', TaskController_1.all_tasks);
router.get('/create', TaskController_1.create_task);
router.post('/', [
    (0, express_validator_1.check)('name').isString().isLength({ min: 3, max: 60 }).withMessage('the name must be at least 3 characters long and at most 60 characters long'),
    (0, express_validator_1.check)('date').isDate().withMessage('the date must be a valid date'),
    (0, express_validator_1.check)('description').isString().isLength({ min: 1, max: 500 }).withMessage('the description must be at most 500 characters long'),
], TaskController_1.add_task);
router.get('/:id/details', TaskController_1.get_task);
router.delete('/delete/:id', TaskController_1.delete_task);
exports.default = router;
