import React from 'react'
import {BsFillBagFill} from "react-icons/bs"
import { useAppContext } from '../context/appContext'
import "./app.css"

const Navbar = () => {
    let { cartItems}=useAppContext()
  return (
    <div className='cartNav'>
      <h1 className='dark'>UseReducer</h1>
      <div className='cart'>
        <BsFillBagFill className='bag'/>
        <p>{ cartItems}</p>
      </div>
    </div>
  )
}

export default Navbar
