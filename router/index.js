import express from 'express'
import authUser from './auth.js'

const router = express.Router();
router.use('/auth',authUser)

export default router;