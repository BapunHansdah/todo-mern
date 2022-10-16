import express from 'express'

const port = process.env.PORT || 4000
const app = express()

// app.get("/",(res,req)=>console.log("hello world"))

app.use('/', (req, res) => {
    res.send('Hello World, from express');
});

app.listen(port,()=>{
	console.log(`app started at port ${port}`)
})