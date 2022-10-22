import {useNavigate,Navigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
import Login from './login'
import HomeComp from './homecomp'
import axios from 'axios'
import useAuth from '../hook/useAuth'
export default function Main(){

const {auth} = useAuth()
const navigate = useNavigate()

   if(auth === undefined) return <>Loading</>
   return auth ? <HomeComp/> : <Navigate to="/login" />
    
}