import React from 'react'
import data from "./data"
import "./app.css"
import { PhoneCallbackSharp } from '@mui/icons-material'
import { buttonBaseClasses } from '@mui/material'

const App = () => {
    let [btns,setBtns]=React.useState([])
    let [realData,setRealData]=React.useState(data)
    // let arr=[1,1,1,2,3,3,3,4,5]
    // console.log(new Set(arr))

    React.useEffect(()=>{
        let array=new Set(realData.map((all)=>{
            return all.category
        }))
        array=["All",...array]
        setBtns(array)
    },[])

    function button(category){
        if(category==="All"){
            setRealData(data)
        }
        else{
            let newData=data.filter((all)=>all.category===category)
            setRealData(newData)
        }
    }

    console.log(btns)
  return (
    <div>
        <h1 className='Heading'>Our Menu</h1>
       <div className='toursLine'></div>

       <div className='buttons'>
         {
           btns.map((all)=>{
            return <a href='#' className='category light' onClick={()=>button(all)}>{all}</a>
           })
         }
       </div>

       <div className='food'>
         {
            realData.map((all)=>{
                return <div className='singleFood'>
                       <img src={all?.img}/>
                       <div className='content'>
                           <div style={{width:"100%",display:"flex",justifyContent:"space-between"}}>
                               <p className='light'>{all?.title}</p>
                               <p className='dark'>${all?.price}</p>
                           </div>
                               <div className='line'></div>
                           <p className='light'>{all?.desc}</p>
                       </div>
                </div>
            })
         }
       </div>
    </div>
  )
}

export default App
