import express from 'express'
import authUser from './auth.js'
import userList from './user.js'
import checkAuth from '../utils/checkAuth.js'

const router = express.Router();
router.use('/auth',authUser)
router.use('/users',checkAuth,userList)
export default router;