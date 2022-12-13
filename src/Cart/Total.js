import React from 'react'
import { useAppContext } from '../context/appContext'

const Total = () => {
    let {clearAll,totalAmount}=useAppContext()
  return (
    <div className='total'>
      <div className='cartLine'></div>

      <div className='totalSub'>
        <h1 className='dark'>Total</h1>
        <p className='light'>${totalAmount}</p>
      </div>

      <button className='clear light' onClick={()=>clearAll()}>Clear All</button>
    </div>
  )
}

export default Total
