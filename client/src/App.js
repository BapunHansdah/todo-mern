import React from 'react'
import Home from './components/home'
import Login from './components/login'
import Feed from './components/feed'
import Register from './components/register'
import Profile from './components/profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

function App() {

    return (
        <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/feed' element={<Feed/>} />
            <Route path='/profile/:userID' element={<Profile/>}/>
          </Routes>
      </BrowserRouter> 
      </>
    )
}

export default App