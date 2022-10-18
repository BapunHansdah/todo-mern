import react from 'react'

function Main(){
	return(	
		<>
           <div className="mx-auto p-2">
           	  <div className="font-bold max-w-sm mx-auto p-5 text-white bg-black">
           	    Welcome to <span className="text-blue-400 "> MERN-TODO</span>
           	  </div>
           	  <div className="max-w-sm mx-auto mt-5">
           	    <div className="flex gap-2"><input className="p-2 w-8/12  border-2 rounded" placeholder="write your task"/><button className="rounded w-4/12 bg-black text-white hover:opacity-80">Add Task</button></div>
           	  </div>
           	  <div className="max-w-sm mx-auto mt-5 space-y-2">
           	    <div className="flex justify-between"><input type="checkbox" className="rounded accent-green-600 w-1/12 bg-black text-white" /><div className="p-1 w-8/12 border-b-2 border-b-2 rounded">Task Name</div><button className="rounded w-2/12 bg-red-600 text-white hover:bg-red-500">&#88;</button></div>
           	    <div className="flex justify-between"><input type="checkbox" className="rounded accent-green-600 w-1/12 bg-black text-white" /><div className="p-1 w-8/12 border-b-2 border-b-2 line-through rounded">Task Name</div><button className="rounded w-2/12 bg-red-600 text-white hover:bg-red-500">&#88;</button></div>
           	  </div>
           </div>
		</>
	)
}

export default Main;