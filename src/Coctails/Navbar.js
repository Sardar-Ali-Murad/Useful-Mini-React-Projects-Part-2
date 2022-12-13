import React from 'react'
import { Link } from 'react-router-dom'
import "./app.css"

const Navbar = () => {
  return (
    <div className='coctailNav'>
      <h2 className='dark' style={{marginTop:"20px"}}>The Coctail  DB</h2>

      <div>
         <ul>
            <li><Link to="/" style={{color:"black"}} className="light">Home</Link></li>
         </ul>
      </div>

    </div>
  )
}

export default Navbar
