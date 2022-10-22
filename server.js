import express from 'express'
import dotenv from 'dotenv'
import {connectDB} from './config/db.js'
import allRoutes from './router/index.js'
import cookieparser from 'cookie-parser'
import cors from'cors'

dotenv.config()

const port = process.env.PORT || 4000

const app = express()

app.use(cors())
app.use(cookieparser())
app.use(express.json())
app.use('/api',allRoutes)


app.listen(port,()=>{
   connectDB()   
	console.log(`app started at port ${port}`)
})