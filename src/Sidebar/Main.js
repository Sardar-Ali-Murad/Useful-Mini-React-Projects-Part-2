import React from 'react'
import "./app.css"
import Sidebar from "./Sidebar"
import Model from './Model'

const Main = () => {
  return (
    <div className='SidebarMain' style={{height:"100vh"}}>
       <Sidebar/>
       <Model/>
    </div>
  )
}

export default Main
