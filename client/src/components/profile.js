import {useNavigate,Navigate} from 'react-router-dom'
import Login from './login'
import ProfileComp from './profilecomp'
import axios from 'axios'
import useAuth from '../hook/useAuth'
export default function Main(){

const {auth} = useAuth()
const navigate = useNavigate()

   if(auth === undefined) return <>Loading...</>
   return auth ? <ProfileComp/> : <Navigate to="/login" />
    
}