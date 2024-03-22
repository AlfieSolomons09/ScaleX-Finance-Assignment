import express from 'express'
import { deleteTask, getAllTasks, newTask, updateTask } from '../controllers/task.js';

const router = express.Router();

router.post("/new", newTask)
router.delete("/:id", deleteTask)
router.put("/:id", updateTask)
router.get("/allTasks", getAllTasks)

export default router;