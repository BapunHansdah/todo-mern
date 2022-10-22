export function authApp(auth){
	return{
		type:"AUTH",
		payload:{
			auth:auth
		}
	}
}