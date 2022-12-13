import React from 'react'
import {AiOutlinePlus} from "react-icons/ai"
import {AiOutlineMinus} from "react-icons/ai"

const Section = ({title,info,id,changeId,openId}) => {
    let [text,setText]=React.useState(false)
    function plus(){
        setText(true)
        changeId(id)
    }

    function minus(){
      setText(false)
      changeId(id)
    }

    React.useEffect(()=>{
      if(openId===id){
        setText(true)
      }
      else{
          setText(false)
      }
    },[openId])

  return (
    <div className='questionSection'>
        <div style={{width:"100%",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
           <h1 className='dark' style={{marginTop:"15px"}}>{title}</h1>
           {!text ?
               <AiOutlinePlus className='plus' onClick={plus}/>:
               <AiOutlineMinus className='minus' onClick={minus}/>
           }
        </div>
          
          {
            ( text && openId===id ) && <p className='light'>{info}</p>
          }

    </div>
  )
}

export default Section
