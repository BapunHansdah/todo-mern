import {createTask,updateTask,getAllTask,deleteTask ,deleteAllTask} from '../controller/task.js'
import express from 'express'

const router = express.Router()

router.get('/',getAllTask)
router.post('/',createTask)
router.put('/:taskID',updateTask)
router.delete('/:taskID',deleteTask)
router.delete('/',deleteAllTask)

export default router