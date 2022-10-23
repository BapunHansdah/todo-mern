import express from 'express'
import {register,login,isLoggedIn,logout} from '../controller/auth.js'

const router = express.Router()

router.post('/register',register)
router.post('/login',login)
router.get('/isloggedin',isLoggedIn)
router.get('/logout',logout)

export default router