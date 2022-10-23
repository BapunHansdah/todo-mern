import {createTask,updateTask,getAllTask,deleteTask ,deleteAllTask,getFeedTasks,getOtherUserTask} from '../controller/task.js'
import express from 'express'

const router = express.Router()

router.get('/feed',getFeedTasks)
router.get('/',getAllTask)
router.post('/',createTask)
router.put('/:taskID',updateTask)
router.delete('/delete/:taskID',deleteTask)
router.delete('/',deleteAllTask)
router.get('/profile/:userID',getOtherUserTask)

export default router