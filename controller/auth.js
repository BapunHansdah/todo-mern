import bcrypt from 'bcryptjs'
import jwt from 'jwt'
import User from '../schema/userSchema.js'


export const register = async (req,res,next) =>{
	if(!req.body.name || !req.body.email || !req.body.password){
		throw new Error("name ,email and password")
	}
	try{
		const salt = await bcryptjs.genSalt(10)
		const hashPassword = await bcryptjs.hash(req.body.password,salt)

		const newUser = new User({
			name:req.body.name,
			email:req.body.email,
			password:hashPassword
		})
		await newUser.save()
		return res.status(201).('new user created')
	}
	catch(err){
		return next(err)
	}
}