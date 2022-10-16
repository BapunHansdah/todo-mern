import express from 'express'
import dotenv from 'dotenv'
import {connectDB} from './config/db.js'
import allRoutes from './router/index.js'


dotenv.config()

const port = process.env.PORT || 4000

const app = express()


app.use(express.json())
app.use('/api',allRoutes)


app.listen(port,()=>{
   connectDB()   
	console.log(`app started at port ${port}`)
})