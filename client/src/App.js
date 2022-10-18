import React from 'react'
import Main from './components/main'
import Login from './components/login'
import Register from './components/register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

function App() {

    return (
        <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
      </BrowserRouter> 
      </>
    )
}

export default App