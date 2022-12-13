import React from 'react'
import "./app.css"
import moment from "moment"

const App = () => {
    // 725ffa020e964348752f5b1678a9fccd
    React.useEffect(()=>{
     let start=async ()=>{
     let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Pakistan&appid=725ffa020e964348752f5b1678a9fccd`)
     let jon=await data.json()
     console.log(jon)
     }
     start()
    },[])
    let timezone=18000
    // const currentTime = moment().tz(timezone).format()
    console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
    // console.log(currentTime)
  return (
    <div>
      Wether App
    </div>
  )
}

export default App
