import express from 'express'
import dotenv from 'dotenv'


dotenv.config()
const port = process.env.PORT || 4000

const app = express()

app.use('/', (req, res) => {
    res.send('Hello World, from express');
});

app.listen(port,()=>{
	console.log(`app started at port ${port}`)
})