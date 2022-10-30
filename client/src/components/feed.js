import axios from 'axios'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

export default function Feed(){

  const [feedTask,setFeedTask] = useState([])
  
  async function getAllTask(){
  	try{
  		const {data} = await axios.get('/api/public/feed')
  		setFeedTask(data)
  	}
  	catch(err){
  		console.log(err)
  	}
  }


  useEffect(()=>{
     getAllTask()
  },[])


	return(
		<div className="max-w-sm mx-auto">
		<div className="mx-auto bg-black text-blue-500 p-4"><Link to="/">Go to your profile &gt;</Link></div>
		  {
		  	feedTask.map((m,i)=>{
		  		return(
		  		      <div className="mx-auto bg-black text-white m-2 p-2" key={m._id}>
		  		        <div className="p-1 text-sm"><Link to={`/profile/${m.by._id}`}>{m.by.name}</Link></div>
		  			     <div className="text-black flex gap-2 justify-between">
		  			          <div className="p-1 w-7/12 text-white">{m.title}</div>
		  			          <div className={`${m.completed ?"bg-green-200":"bg-red-200"} flex justify-center w-5/12 rounded p-1`}>{m.completed ? "completed" : "not completed"}</div>
		  			     </div>
		  		      </div>
		  		)
		  	}).reverse()
		  }
		  </div>
		)
}