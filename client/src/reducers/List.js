import axios from 'axios'
const defObj = []

export const defaultObj = (state=defObj ,action) =>{
   return state
}

export const Auth = async (state=false,action)=>{
       if(action.type ==="AUTH"){
          return action.payload.auth
       }
   return state
}