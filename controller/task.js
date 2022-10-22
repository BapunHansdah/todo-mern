import mongoose from 'mongoose'
import '../schema/taskSchema.js'


const Task = mongoose.model("todoTask")

export const createTask = async (req,res,next) =>{

	const {title,completed} = req.body

	if(!title){
		return res.status(403).json("inputs cant be empty")
	}

    const {id} = req.user
     try{
        const newTask = new Task({
    	title,completed,by:id
        })
        await newTask.save()
        return res.status(200).json(newTask)
     }
     catch(err){
       return next(err)
     }


}

export const getAllTask = async (req,res,next)=>{
     const {id} = req.user
     try{
       const getTasks =await Task.find({by:id})
       return res.status(200).json(getTasks)
     }
     catch(err){
     	return next(err)
     }
}


export const updateTask = async (req,res,next) =>{

	const {_id,title,completed} = req.body

	const {id} =req.user
	const {taskID} = req.params	

	try{
		if(!taskID.match(/^[0-9a-fA-F]{24}$/)){
           return res.status(404).json('invalid task')
		}
		const task = await Task.findById({_id:taskID})
		// console.log(task)
		if(!task){
			return res.status(404).json('task not found')
		}

		if(task.by !== id){
			return res.status(401).json('its not your task')
		}

		const updatedTask = await Task.findByIdAndUpdate(taskID,{title,completed},{new:true})
		return res.status(200).json(updatedTask)
	}
	catch(err){
		return next(err)
	}

}

export const deleteTask = async (req,res,next) =>{
    const {taskID} = req.params
    try{
    	const deleteOneTask = await Task.deleteOne({_id:taskID})
    	return res.status(200).json('task deleted')
    }
    catch(err){
    	return next(err)
    }
}

export const deleteAllTask = async (req,res,next)=>{

   const {id} = req.user

	try {
      const deleteTasks = await Task.deleteMany({by:id})
      return res.status(200).json("all tasks deleted")
	}
	catch(err){
		return next(err)
	}
}

