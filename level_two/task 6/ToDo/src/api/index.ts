import express from "express";
import firstResponse from "../interfaces/firstResponse";
import todo from './todo/todo.routes'
const router = express.Router();

router.get<{}, firstResponse>('/', (req, res) => {
    res.json({
        message: 'hello from api.'
    })
})

router.use('/todo', todo)
export default router
