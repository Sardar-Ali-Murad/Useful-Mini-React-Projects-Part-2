
import { CollectionsBookmarkOutlined } from '@mui/icons-material'
import React from 'react'
import "./app.css"

const App = () => {
    let currentDate=new Date()
    let futureDate=new Date(2022, 11, 25)
    let difference=futureDate-currentDate
    let oneDay=24*60*60*1000
    let RemainingDays=Math.floor(difference/oneDay)


    let hoursInMilli=(difference%oneDay)
    let oneHour=1000*60*60
   let   RemainingHours=Math.floor(hoursInMilli/oneHour)
    
    let oneMinute=60*1000
    let RemainingMinutes=Math.floor((hoursInMilli%oneHour)/oneMinute)

    let RemainingSeconds=Math.floor(((hoursInMilli%oneHour)%oneMinute)/1000)

     console.log(RemainingDays,RemainingHours,RemainingMinutes,RemainingSeconds)

     let [days,setDays]=React.useState(RemainingDays)
     let [hours,setHours]=React.useState(RemainingHours)
     let [minutes,setMinutes]=React.useState(RemainingMinutes)
     let [seconds,setSeconds]=React.useState(RemainingSeconds)


    
         setTimeout(()=>{
            setDays(RemainingDays)
            setHours(RemainingHours)
            setMinutes(RemainingMinutes)
            setSeconds(RemainingSeconds)
         },1000)
    


    
  return (
    <div className='timer-main'>

        <div className='div-perfect-center text-center time'>

       <h1>Welcome to the Count Down To The New Eve</h1>
       <p>Wall Clocks ; Nordic Creative Retro Metal Wrought Iron Roman ... · Rs.4,999.00 · Sold Out ; Wooden Big Digits Wall Clock · Rs.3,500.00. Add to Cart ; Vintage Retro</p>

       <div className='time-box div-center'>
          <div>
             <h3>{days}</h3>
             <h6>Days</h6>
          </div>
          <div>
             <h3>: {hours}</h3>
             <h6>Hours</h6>
          </div>
          <div>
             <h3>: {minutes}</h3>
             <h6>Minutes</h6>
          </div>
          <div>
             <h3>: {seconds}</h3>
             <h6>Seconds</h6>
          </div>
       </div>

        </div>

    </div>
  )
}

export default App
