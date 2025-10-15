import React from 'react'
import SignUpPage from '../Pages/SignUpPage'
import LoginPage from '../Pages/LoginPage'
import HomePage from '../Pages/HomePage'
import {  Link, Route, Routes } from 'react-router-dom'

function Router() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>

    </div>
  )
}

export default Router