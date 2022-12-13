import React from 'react'
import "./app.css"
import Image from "./4.jpg"

const App = () => {
  return (
    <div className='card'>
      <div className='ima'>
       <img src={Image}/>
      </div>

      <div className='con'>
        {/* <div className='Overl'></div> */}
        <h1>card</h1>
      </div>


    </div>
  )
}

export default App
