import express from 'express'
import {updateUser,getUserInfo} from '../controller/user.js'


const router = express.Router();
// router.get('/allusers',getAllUsers)
router.put('/user',updateUser)
router.get('/user',getUserInfo)

export default router;