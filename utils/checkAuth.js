import jwt from 'jsonwebtoken'

export default (req,res,next) =>{

	const token = req.cookies.access_token

	if(!token){
		return res.status(401).json("unauthorized ! , login first")
	}
	const verifyToken = jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
		if(err){
			return res.status(401).json("unauthorized !, invalid token")
		}
		req.user = decoded
		return next()
	})
	return verifyToken

}