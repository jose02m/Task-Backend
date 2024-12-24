import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import taskController from '../controllers/task.controller.js'

const router = Router();

router.get('/read', authRequired, taskController.getTasks)
router.get('/read/:id', authRequired, taskController.getTask)
router.post('/create', authRequired, taskController.createTask)
router.delete('/delete/:id', authRequired, taskController.deleteTask)
router.put('/update/:id', authRequired, taskController.updateTask)

export default router;