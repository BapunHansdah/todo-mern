import express from 'express'
import dotenv from 'dotenv'
import {connectDB} from './config/db.js'

dotenv.config()
connectDB()

const port = process.env.PORT || 4000

const app = express()

app.use('/', (req, res) => {
    res.send('Hello World, from express');
});

app.listen(port,()=>{
	console.log(`app started at port ${port}`)
})