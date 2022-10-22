import {useState,useEffect} from 'react'
import {Link,useNavigate,Navigate} from 'react-router-dom'
import axios from 'axios'

export default function LoginTemp(){

    const [loginInfo,setLoginInfo] = useState({})
    const navigate = useNavigate()

    async function login(e){
        e.preventDefault()
        const {email,password} =loginInfo
        try{
          await axios.post('/api/auth/login',{
            email,password
          })
          navigate('/')
        }
        catch(err){
           console.log(err)
        }
    }

  function handleChange(e){
    setLoginInfo({...loginInfo,[e.target.name]:e.target.value})
  }

      return(
            <div className="h-screen mx-auto p-2">
               <div className="max-w-sm mx-auto text-center font-bold text-3xl text-blue-300 px-5 py-5 mt-24 p-5 bg-black rounded shadow">MERN-TODO</div>    
               <form onSubmit={login} className="max-w-sm mx-auto bg-white px-5 py-5 m-2 rounded shadow">
                  <div className="text-center font-bold text-2xl">Sign In</div>
                  <div className="m-2"><input onChange={handleChange} name="email"    className="w-full p-2 border-2 rounded" placeholder="email"/></div>
                  <div className="m-2"><input onChange={handleChange} name="password" className="w-full p-2 border-2 rounded" placeholder="password"/></div>
                  <div className="m-2"><button className="p-2 text-white bg-black rounded">Sign In</button></div>
                  <div className="m-2">Not a Member? <span className="text-blue-400"><Link to="/register">Register</Link></span></div>
               </form>
            </div>
        )
  }