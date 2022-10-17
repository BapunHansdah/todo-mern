import mongoose from 'mongoose'
import '../schema/userSchema.js'

const User = mongoose.model('TodoUser')

// export const getAllUsers = async (req,res,next) =>{
//      const {name,email} = req.body
// 	try{
//        const getAllUser = await User.find()
//        return res.status(200).json(getAllUser)
// 	}
// 	catch(error){
// 		return next(error)
// 	}
// }

export const updateUser = async (req,res,next) =>{
	const {name,email} = req.body
	const {id} = req.user

	try{
	   	const user =await User.findOne({email})
	    if(user){
		return res.status(403).json('user already exist')
	    }
       const updatedUser = await User.findByIdAndUpdate(id,{name,email},{new:true})
       return res.status(200).json(updatedUser)
	}
	catch(err){
		return next(err)
	}
}

export const getUserInfo = async(req,res,next)=>{
	const {id} = req.user

	try{
	   const findUserInfo = await User.findOne({_id:id}).select('name email')
	   return res.status(200).json(findUserInfo)
	}
	catch(error){
      return next(error)
	}

}