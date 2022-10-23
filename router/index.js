import express from 'express'
import authUser from './auth.js'
import userList from './user.js'
import checkAuth from '../utils/checkAuth.js'
import taskList from './task.js'

const router = express.Router();
router.use('/auth',authUser)
router.use('/public',taskList)
router.use('/users',checkAuth,userList)
router.use('/tasks',checkAuth,taskList)
export default router;