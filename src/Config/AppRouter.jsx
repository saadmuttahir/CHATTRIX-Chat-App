import  { useEffect, useState } from 'react'
import SignUpPage from '../Pages/SignUpPage'
import LoginPage from '../Pages/LoginPage'
import HomePage from '../Pages/HomePage'
import {  Link, Route, Routes, Navigate } from 'react-router-dom'
import {Spin}from "antd"
import { onAuthStateChanged,auth } from './Firebase'

function AppRouter() {
const [user,setUser]=useState(null)
const [loading ,Setloading]=useState(true)

  useEffect(  
onAuthStateChanged(auth, (user) => {
  Setloading(false)
  setUser(user)})
  ,[])
  if(loading){
    return <div className=' w-screen h-screen flex justify-center items-center'>
      <Spin />
      </div>
  }
  return (
    <div>

      <Routes>
        <Route path='/' element={!user ? <Navigate to={"/login"} /> : <HomePage />} />
        <Route path='/login' element={user ? <Navigate to={"/"} /> : <LoginPage />} />
        <Route path='/signup' element={user ?<Navigate to={"/"}/> :<SignUpPage />} />
      </Routes>

    </div>
  )
}

export default AppRouter