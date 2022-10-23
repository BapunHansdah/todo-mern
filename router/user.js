import express from 'express'
import {updateUser,getUserInfo,getOtherUserProfile} from '../controller/user.js'


const router = express.Router();
// router.get('/allusers',getAllUsers)
router.put('/user',updateUser)
router.get('/user',getUserInfo)
router.get('/profile/:userID',getOtherUserProfile)

export default router;