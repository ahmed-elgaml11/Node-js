import express from 'express';
const router = express.Router();
import { check } from 'express-validator';
import {all_tasks, create_task, add_task, get_task,delete_task } from '../controllers/TaskController';



router.get('/', all_tasks)

router.get('/create', create_task)

router.post('/', [
  check('name').isString().isLength({min: 3, max: 60}).withMessage('the name must be at least 3 characters long and at most 60 characters long'),
  check('date').isDate().withMessage('the date must be a valid date'),
  check('description').isString().isLength({min: 1, max: 500}).withMessage('the description must be at most 500 characters long'),
],add_task) 


router.get('/:id/details',get_task) 

router.delete('/delete/:id',delete_task)

export default router;
