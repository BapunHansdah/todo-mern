import express from 'express'
import {updateUser,getUserInfo} from '../controller/user.js'


const router = express.Router();
// router.get('/allusers',getAllUsers)
router.put('/updateuser',updateUser)
router.get('/updateuser',getUserInfo)

export default router;