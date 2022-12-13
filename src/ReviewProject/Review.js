import React from 'react'
import {FcNext} from "react-icons/fc"
import {MdNavigateBefore} from "react-icons/md"

const Review = ({props,next,before,random}) => {
  return (
    <div className='reviewCard'>
      <img src={props.image} style={{width:"70px",height:"70px",borderRadius:"50%",marginBottom:"20px"}}/>
      <h1 className='dark'>{props.name}</h1>
      <p className='light' style={{color:'blue'}}>{props.job}</p>
      <p className='light' style={{fontSize:"14px",textAlign:"center"}}>{props.text}</p>
      <div className='nextAfter'>
        <MdNavigateBefore className='before'  onClick={()=>before()}/>
        <FcNext className='after' onClick={()=>next()}/>
      </div>
      <a href='#' className='surprise light' onClick={()=>random()}>Surprise Me</a>
    </div>
  )
}

export default Review

