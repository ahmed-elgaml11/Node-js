import express from 'express';
const router = express.Router();
import * as controller from '../controllers/UserContollers'






router.get('/',controller.form)
router.post('/', controller.add_data)





export default router