import express from 'express'
import {register,login,isLoggedIn} from '../controller/auth.js'

const router = express.Router()

router.post('/register',register)
router.post('/login',login)
router.get('/isloggedin',isLoggedIn)

export default router