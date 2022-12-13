import React from 'react'
import "./app.css"
import Navbar from "./Navbar"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Single from './Single'

const App = () => {
  return (
    <div>
        <BrowserRouter>
           <Navbar/>
           <Routes>
              <Route path='/'  element={<Home/>}/>
              <Route path='/Single/:Id'  element={<Single/>}/>
           </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
