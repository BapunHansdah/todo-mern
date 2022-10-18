
import {Link} from 'react-router-dom'
export default function Register() {
  return (
    <div className="bg-gray-100 h-screen mx-auto p-2">
       <div className="max-w-sm mx-auto text-center font-bold text-3xl text-blue-300 px-5 py-5 mt-24 p-5 bg-black rounded shadow">MERN-TODO</div>    
       <form className="max-w-sm mx-auto bg-white px-5 py-5 m-2 rounded shadow">
          <div className="text-center font-bold text-2xl">Sign Up</div>
          <div className="m-2"><input className="w-full p-2 border-2 rounded" placeholder="username"/></div>
          <div className="m-2"><input className="w-full p-2 border-2 rounded" placeholder="email"/></div>
          <div className="m-2"><input className="w-full p-2 border-2 rounded" placeholder="password"/></div>
          <div className="m-2"><button className="p-2 text-white bg-black rounded">Sign Up</button></div>
          <div className="m-2">Already a Member? <span className="text-blue-400"><Link to="/login">Sign In</Link></span></div>
       </form>
    </div>
  )
}
