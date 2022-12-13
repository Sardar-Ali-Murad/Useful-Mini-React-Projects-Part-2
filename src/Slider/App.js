import React from 'react'
import data from "./data"
import "./app.css"
import {AiOutlineLeft} from "react-icons/ai"
import {AiOutlineRight} from "react-icons/ai"
import { Co2Sharp } from '@mui/icons-material'
import { refType } from '@mui/utils'


const App = () => {
    let [people,setPeople]=React.useState(data)
    let [index,setIndex]=React.useState(0)

     function  decrease(){
        let newIndex=index-1
        if(newIndex<0){
            setIndex(people.length-1)
        }
        else{
            setIndex((pre)=>pre-1)
        }
     }


     function  increase(){
        let newIndex=index+1
        if(newIndex>people.length-1){
            setIndex(0)
        }
        else{
            setIndex((pre)=>pre+1)
        }
     }

    //  React.useEffect(()=>{
    //    setTimeout(()=>{
    //       increase()
    //    },5000)
    //  },[index])

     console.log(index)
    

  return (
    <div >
      <h1 style={{textAlign:"center"}}>Reviews</h1>
      <div className='sliderWrapper'>

     {
         people.map((all,peopleIndex)=>{
            let position="Next"
            if(index===peopleIndex){
                position="Active"
            }
            if((index===0 && peopleIndex===people.length-1) || peopleIndex===index-1){
                position="Previous"
            }

            return(
                
                <div className={`singleSlider ${position}`}>
        <img src={all.image}/>
        <h2 className='dark'>{all?.name}</h2>
        <h3 className='dark'>{all?.title}</h3>
        <p className='light' style={{textAlign:"center"}}>{all.quote}</p>

        <AiOutlineLeft className='left' onClick={decrease}/>
        <AiOutlineRight className='right' onClick={increase}/>
      </div>
    )
})
}
</div>
    
    </div>
  )
}

export default App
