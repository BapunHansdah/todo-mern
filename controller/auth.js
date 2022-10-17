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

export const login = async (req,res,next) =>{
	const {email,password} = req.body
	if(!email || !password){
		return res.status(403).json('inputs cant be empty')
	}
	try{
		const user =await User.findOne({email}).select('name email password')

		if(!user){
			return res.status(404).json("the user does not exist")
		}
		const checkPassword = await bcrypt.compare(password,user.password) 
		if(!checkPassword){
			return res.status(401).json('password is incorrect')
		}
		const payload ={
			id:user._id,
			name:user.name
		}
		const token = jwt.sign(payload,process.env.JWT_SECRET,{
			expiresIn:'1d'
		})

		return res.cookie('access_token',token ,{httpOnly:true}).status(200).json({name:user.name,email:user.email,message:"login success"});

	}
	catch(err){
		return next(err)
	}

}

