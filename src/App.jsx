import { useState } from 'react'
import Router from './Config/Router'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <><BrowserRouter>
      <Router />
    </BrowserRouter>
    </>
  )
}

export default App
