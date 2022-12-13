import React from 'react'
import data from "./data"
import "./app.css"

const App = () => {
    let [arr,setArr]=React.useState(data)
    let [value,setValue]=React.useState(0)
    let [sortedArr,setSortedArr]=React.useState([])
    function generate(){
        if(value<arr.length && value>0){
            let newArray=arr.slice(0,value)
            setSortedArr(newArray)
        }
        else if(value>arr.length || value<0){
            let random=Math.floor(Math.random()*arr.length+1)
            let newArray=arr.slice(0,random)
            setSortedArr(newArray)
        }
    }
    let ar=[1,2,3,34,5,6,7,8]

    console.log(console.log(ar.slice(0,ar.length-1)))
    console.log(console.log(ar.slice(0,ar.length)))

    function reset(){
        setArr(data)
        setSortedArr([])
        setValue(0)
    }
  return (
    <div className='loremMain'>
      <h1 className='dark' >Tired of Boring Lorem Ipsum?</h1>

      <div >
        <p className='light'>Paragraphs:</p>
        <div className='center' style={{display:"flex"}}>
           <input type="Number" value={value} onChange={(e)=>setValue(e.target.value)}/>
           <button className='btn' style={{marginLeft:"20px"}} onClick={generate}>Generate</button>
        </div>
      </div>


      <div>
         {
            sortedArr?.map((all)=>{
                return <p className='light'>{all}</p>
            })
         }
      </div>

      <button className='btn' onClick={reset}>Reset</button>


    </div>
  )
}

export default App
