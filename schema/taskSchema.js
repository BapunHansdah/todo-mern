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
		ref:'todo-User',
		required:true
	},
},{timestamps:true})

export default mongoose.model("todo-task",taskSchema)