
import React from 'react'
import Values from 'values.js'
import "./app.css"
import Color from './Color'

const App = () => {
    const color = new Values('#f15025').all(10)
    let [arr,setArr]=React.useState(color)
    let [value,setValue]=React.useState("#f15025")

    function generate(){
      setArr(new Values(value).all(10))
    }
  return (
    <div>
        <div style={{display:"flex",padding:"20px",position:"relative"}}>
          <h1>Color Generator</h1>
          <div className='button-input'>
             <input className='dark' value={value} onChange={(e)=>setValue(e.target.value)}/>
             <button className='light' onClick={generate}>Generate</button>
          </div>
        </div>

        <div className='colorGrid'>
           {
            arr.map((all)=>{
                return <Color data={all}/>
            })
           }
        </div>
    </div>
  )
}

export default App
