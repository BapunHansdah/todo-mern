import mongoose from 'mongoose'

const taskSchema =new mongoose.Schema({
	title:{
		type:String,
		required:true,
	},
	completed:{
		type:Boolean,
		required:true
	},
	by:{
		ref:'todoUser',
		required:true
	},
},{timestamps:true})

mongoose.model("todoTask",taskSchema)