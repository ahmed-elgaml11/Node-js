import express from "express";
const router = express.Router();
import * as handlers from './todo.handlers'
import { validateRequest } from '../../middlewares/validateRequest'

router.get('/', handlers.findAll)
router.get('/:id', handlers.findOne)
router.post('/', validateRequest,  handlers.createOne)
router.put('/:id', validateRequest, handlers.updateOne)
router.delete('/:id', handlers.deleteOne)


export default router