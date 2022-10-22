
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useState} from 'react'
export default function Register() {

  const [registerInfo ,setRegisterInfo] = useState({})

  async function register(e){
    e.preventDefault()
    console.log(registerInfo)

    const {name,email,password} = registerInfo

    try{
        await axios.post('/api/auth/register',{
        name,email,password
        })
    }
    catch(err){
      console.log(err)
    }

  }

  function handleChange(e){
    setRegisterInfo({...registerInfo,[e.target.name]:e.target.value})
  }

  return (
    <div className="bg-gray-100 h-screen mx-auto p-2">
       <div className="max-w-sm mx-auto text-center font-bold text-3xl text-blue-300 px-5 py-5 mt-24 p-5 bg-black rounded shadow">MERN-TODO</div>    
       <form onSubmit={register} className="max-w-sm mx-auto bg-white px-5 py-5 m-2 rounded shadow">
          <div className="text-center font-bold text-2xl">Sign Up</div>
          <div className="m-2"><input onChange={handleChange} name="name"  className="w-full p-2 border-2 rounded" placeholder="username"/></div>
          <div className="m-2"><input onChange={handleChange} name="email" className="w-full p-2 border-2 rounded" placeholder="email"/></div>
          <div className="m-2"><input onChange={handleChange} name="password" className="w-full p-2 border-2 rounded" placeholder="password"/></div>
          <div className="m-2"><button className="p-2 text-white bg-black rounded">Sign Up</button></div>
          <div className="m-2">Already a Member? <span className="text-blue-400"><Link to="/login">Sign In</Link></span></div>
       </form>
    </div>
  )
}
