import axios from 'axios'
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function Profile(){

	const [userData,setUserData] = useState({})
	const [userTask,setUserTask] =useState([])

	const {userID} = useParams()

    async function getProfileData(){
      try{
        const resUser =  await axios.get(`/api/users/profile/${userID}`)
        const resTask =  await axios.get(`/api/tasks/profile/${userID}`)
        setUserTask(resTask.data)
        setUserData(resUser.data)
      }catch(err){
        console.log(err)
      }
    }

    useEffect(()=>{
      getProfileData()
    },[])
    

    if(userData.name === undefined) return <>loading....</>

	return(
<>
           <div className="mx-auto p-2">
           	  <div className="max-w-sm mx-auto p-5 text-white bg-black">
           	    <div className="font-bold mb-5">Welcome to <span className="text-blue-400 "> <Link to="/feed">MERN-TODO</Link></span></div>
           	    <div>Hello , {userData.name}</div>
           	    <div className="opacity-50 text-sm">{userData.email}</div>
           	  </div>
           	  <div className="max-w-sm mx-auto mt-5 space-y-2">
           	    {
           	    	userTask.length ==0 && <div className="flex justify-center bg-black text-white items-center h-10 ">No Task !!!</div>
           	    }

           	    {
           	    	userTask && userTask.map((task,ind)=>{
           	    		return (
           	                    <div key={ind} className={`flex items-center border-b border-black justify-between`}>
           	                         <div className="w-7/12 border">{task.title}</div>  
           	                         <div className={`${task.completed ?"bg-green-200":"bg-red-200"} flex justify-center w-5/12 rounded p-1`}>{task.completed ? "completed" : "not completed"}</div>
           	                    </div>
           	    			   )
           	    	})
           	    }

           	    {/*<div className="flex items-center justify-between"><input type="checkbox" className="accent-green-600 w-1/12 bg-black text-white" /><div className="p-1 w-8/12 border-b-2 border-b-2 line-through rounded">Task Name</div><button className="rounded w-2/12 bg-red-600 text-white hover:bg-red-500">&#88;</button></div>*/}
           	  </div>
           </div>
		</>
	)

}