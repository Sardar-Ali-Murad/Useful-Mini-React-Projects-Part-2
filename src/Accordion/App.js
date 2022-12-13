import React from 'react'
import data from "./data"
import Section from './Section'
import "./app.css"

const App = () => {
    let [qusetions,setQuestions]=React.useState(data)
    let [openId,setOpenId]=React.useState()

    function changeId(id){
        setOpenId(id)
    }

    console.log(openId)
  return (
    <div className='accordionMain'>
        <div className='accordionCard'>

           <div className='part1' >
              <h1>Questions And Answers About Login</h1>
           </div>
           
           <div className='part2' style={{width:"80%"}}>
               {
                data.map((all)=>{
                    return <Section title={all?.title} info={all?.info} id={all?.id} changeId={changeId} openId={openId}/>
                })
               }
           </div>

        </div>
    </div>
  )
}

export default App
