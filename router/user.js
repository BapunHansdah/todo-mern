import express from 'express'
import {getAllUsers,updateUser,getUserInfo} from '../controller/user.js'


const router = express.Router();
router.get('/allusers',getAllUsers)
router.put('/updateuser',updateUser)
router.get('/profile',getUserInfo)

export default router;