import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import '../schema/userSchema.js'

const User = mongoose.model("TodoUser")

export const register = async (req,res,next) =>{

	const {name , email ,password } = req.body
	if(!name || !email || !password){
		return res.status(403).json('inputs cant be empty')
	}
	try{
		const user = await User.findOne({email})
		if(user){
			return res.status(403).json('user already exist')
		}
		const salt = await bcrypt.genSalt(10)
		const hashPassword = await bcrypt.hash(password,salt)
		const newUser = new User({
			name:name,email,
			password:hashPassword
		})
		await newUser.save()
		return res.status(201).json('new user created')
	}
	catch(err){
		return next(err)
	}
}


