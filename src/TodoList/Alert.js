import React from 'react'

const Alert = ({color,text}) => {
  return (
    <div className='AlertMain'>
      <p className={`dark ${color==="danger"?"danger":"success"}`}>{text}</p>
    </div>
  )
}
export default Alert
