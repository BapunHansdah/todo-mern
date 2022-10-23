import react,{useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from'react-router-dom'
import {BiEdit} from 'react-icons/bi'
import {FiTrash2} from 'react-icons/fi'
import {BiUserCircle} from 'react-icons/bi'
import {GrClose} from 'react-icons/gr'
import Modal from 'react-modal'
import {Link} from 'react-router-dom'


Modal.setAppElement("#root")

function Main(){
    
    const [taskList,setTaskList] = useState([])
    const [authorized,setAuthorized] = useState(false)
    const [task,setTask] = useState("")
    const [taskId,seTaskId] =useState("")
    const [isEditing , setIsEditing] = useState(false)
    const [userInfo,setUserInfo] = useState({})
    const [info,setInfo] = useState({})
    const [isopenModal,setIsOpenModal] = useState(false)
    // const [completed,setComplete] = useState(false)
    const [editId,setEditId] = useState("")


    const navigate = useNavigate()

  function handleChange(e){
     setTask(e.target.value)
  }

  function handleChangeUser(e){
  	 setInfo({...info,[e.target.name]:e.target.value})
  }

 async function addTask(e){
  	e.preventDefault()

   if(task.length <= 0){
   	  return "task cant be empty"
   }	
    
   try{
	    const {data} = await axios.post('/api/tasks',{
	       title:task
	  	})
	  	// const data = { title: task, complete: false }

	  	setTask("")
	  	setTaskList([...taskList,{...data}])
	  	setIsEditing(false)
   }
   catch(err){
   	 console.log(err)
   }
  }


  async function deleteTask(id){
 
  	try{
  		await axios.delete(`/api/tasks/delete/${id}`)
  		setTaskList(taskList.filter(task=>task._id !== id))
  	}
  	catch(err){
  		console.log(err)
  	}
  }

  async function completeTask(e,id){
  	// console.log(id) 
  	const {checked} = e.target 	
  	try{
      const {data} = await axios.put(`/api/tasks/${id}`,{
      	completed:checked
      })

    const completedTask = taskList.map(task=>{
	  		if(task._id === id ){
	  			return {...task,completed:!task.completed}
	  		}else{
	  			return {...task}
	  		}
  	    })

        setTaskList(completedTask)
    }

  	catch(err){
  		console.log(err)
  	}
  }

  async function editTask(e){
     e.preventDefault()
     try{
        await axios.put(`/api/tasks/${editId}`,{
        	title:task
        })
        const editedTask = taskList.map(t=>{
        	if(t._id === editId){
        		return {...t,title:task}
        	}else{
        		return {...t}
        	}
        })
        setIsEditing(false)
        setTaskList(editedTask)
        setEditId(null)

     }
     catch(err){
     	console.log(err)
     }
  }

 function editingTask(id,title){
    setEditId(id)
  	setIsEditing(!isEditing)
  	setTask(title)
    
  }

  // function editInfo(){
  //    setInfo(userInfo)
  // }

  function openModal(){
  	setInfo(userInfo)
    setIsOpenModal(true)
  }
  function closeModal(e){
  	e.preventDefault()
  	setIsOpenModal(false)
  }

  async function editUserData(e){
  	 e.preventDefault()



     const {name,email} = info
     if(email<=0 || name <= 0){
     	console.log("Inputs cant be empty")
     	return;
     }
     try{
	     await axios.put("/api/users/user",{
	     	name,email
	     })
	 setUserInfo(info)
	 setIsOpenModal(false)
	 console.log(info)
     }

     catch(err){
       console.log(err)
     }
  }

  async function logOut(){
  	try{
  		await axios.get('/api/auth/logout')
  		console.log("logout success")
  		navigate('/login')
  	}catch(err){
  		console.log(err)
  	}  
  }

  async function apiCall(){
     try{

      await axios.get('/api/users/user').then(res=>{
      	 const {data} = res
      	 setUserInfo(data)
      })

   	  await axios.get('/api/tasks').then(res=>{
            const {data} = res
            setTaskList(data)
   	  });

     }
     catch(err){
     	console.log(err)
     }


   }

   useEffect(()=>{
   	apiCall()
   },[])
   

   if (userInfo.name === undefined) return <>Loading...</>



	return(	
		<>
           <div className="mx-auto p-2">
           	  <div className="max-w-sm mx-auto p-5 text-white bg-black">
           	    <div className="font-bold mb-5">Welcome to <span className="text-blue-400 "><Link to="/feed"> MERN-TODO</Link></span></div>
           	    <div>Hello , {userInfo.name}</div>
           	    <div className="opacity-50 text-sm">{userInfo.email}</div>
           	    <button className="bg-white text-black p-1 text-sm mt-2 rounded" onClick={openModal}>edit profile</button>
           	    <button className="bg-red-900 text-white p-1 text-sm mt-2 rounded" onClick={logOut}>Log Out</button>


           	  </div>
           	  <form className="max-w-sm mx-auto mt-5" onSubmit={!isEditing ? addTask : editTask }>
           	    <div className="flex gap-2"><input onChange={handleChange} value={task} name="title" className="p-2 w-8/12  border-2 rounded" placeholder="write your task"/><button className={`rounded w-4/12 ${!isEditing ? "bg-black" : "bg-orange-600" } text-white hover:opacity-80`}>{!isEditing ? 'Add Task' : 'Edit Task' }</button></div>
           	  </form>

              <Modal isOpen={isopenModal}>
                <div className="mx-auto p-2">
                 <div className="max-w-sm mx-auto p-5 bg-black ">
                    <div className="text-white">Edit profile</div>
                 </div>
                   <form onSubmit={editUserData} className="max-w-sm mx-auto">
	                    <div className="mt-1"><input  onChange={handleChangeUser} value={info.name} className="p-1 border-2 border-black w-full rounded" name="name" placeholder="name"/></div>
	                    <div className="mt-1"><input  onChange={handleChangeUser} value={info.email} className="p-1 border-2 border-black w-full rounded" name="email" placeholder="email"/></div>
	                    <div className="flex gap-2 mt-1">
	                      <button className="bg-black text-white p-1 rounded" >save</button>          
	                      <button onClick={closeModal} className="bg-black text-white p-1 rounded" >cancel</button>
	                    </div>
                    </form>
                </div>
              </Modal>

           	  <div className="max-w-sm mx-auto mt-5 space-y-2">
           	    {
           	    	taskList.length ==0 && <div className="flex justify-center bg-black text-white items-center h-10 ">No Task !!!</div>
           	    }

           	    {
           	    	taskList && taskList.map((task,ind)=>{
           	    		return (
           	                    <div key={ind} className={`flex items-center ${task._id === editId ? "border-l-2 border-b-2 border-green-800" : "" } border-b border-black justify-between`}>
           	                         <div className="flex justify-center w-1/12 border"><input type="checkbox" defaultChecked={task.completed} onChange={(e)=>completeTask(e,task._id)} className="accent-green-600 bg-black text-white" /></div>
           	                         <div className="w-9/12 border">{task.title}</div>
           	                         <div className="flex justify-center w-1/12 border">
           	                             <button onClick={()=>editingTask(task._id,task.title)} className="rounded opacity-100 hover:opacity-50"><BiEdit size={20}/></button>
           	                         </div>
           	                         <div className="flex justify-center w-1/12 border">
           	                             <button onClick={()=>deleteTask(task._id)} className="opacity-100 hover:opacity-50" disabled={!isEditing ? false : true  }><FiTrash2 style={{opacity:`${isEditing ? "0.5" : "1"}`}} size={20}/></button>
           	                         </div>
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

export default Main;