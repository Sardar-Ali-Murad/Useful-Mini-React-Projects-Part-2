import React from 'react'
import { useAppContext } from '../context/appContext'
import Icon from "./Logo2.png"
import Links from "./data"
import {AiOutlineClose} from "react-icons/ai"
import "./app.css"
import {GiHamburgerMenu} from "react-icons/gi"
import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from '../context/actions'

const App = () => {
   let {sidebar,openSidebar,closeSidebar}=useAppContext()

  return (
    <div className='sideBarMain'>
       
        <div className={`sidebar ${sidebar?"ActiveBar":""}`}>
             <div style={{width:"100%",display:"flex",justifyContent:"space-around",marginTop:"20px"}}>
                <img src={Icon} style={{width:"30px"}}/>
                <AiOutlineClose style={{fontSize:"30px",cursor:"pointer"}} onClick={()=>closeSidebar()}/>
             </div>

             <div className='sideLinks' style={{marginTop:"40px"}}>
                 {
                  Links.map((all)=>{
                     return <div className='singleLink' id={all?.id}>
                        <div>{all?.icon}</div>
                        <p className='dark' style={{fontSize:"22px",marginTop:"13px"}}>{all?.text}</p>
                     </div>
                  })
                 }
             </div>
        </div>
        { !sidebar &&
           <div><GiHamburgerMenu style={{fontSize:"30px",marginLeft:"200px",marginTop:"60px",cursor:"pointer"}} onClick={()=>openSidebar()}/></div>
        }
       
    </div>
  )
}

export default App
