import React from 'react'
import { useAppContext } from '../context/appContext'
import {AiOutlineClose} from "react-icons/ai"

const Model = () => {
    let {openModel,closeModel,model}=useAppContext()
  return (
    <div style={{marginLeft:"50%"}}>
      <button className='modelBtn light' onClick={()=>openModel()}>Open Model</button>
      {
        model &&
        <div>
            <div className='Outline'></div>
            <div className='model'>
                <p className='light'>Here is the text for the model </p>
                <AiOutlineClose className="modelClose" onClick={()=>closeModel()}/>
            </div>
        </div>
      }
    </div>
  )
}

export default Model
