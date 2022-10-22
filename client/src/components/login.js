
// import { LockClosedIcon } from '@heroicons/react/20/solid'
import {useState,useEffect} from 'react'
import {Link,useNavigate,Navigate} from 'react-router-dom'
import LoginComp from './logincomp'
import axios from 'axios'
import useAuth from '../hook/useAuth'


export default function Login() {

  const {auth} = useAuth()
  if(auth === undefined) return <>Loading</>
  return !auth ? <LoginComp /> : <Navigate to="/" />

}
