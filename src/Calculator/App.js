import React from 'react'
import { useAppContext } from '../context/appContext'
import "./app.css"
const App = () => {
    let {Number,Sign,first,second,sign,deleteAll,deleteLast,Result,result}=useAppContext()
  return (
    <div className='calculator-grid  div-center-50'>

           {result!=="" && <div  className='col-span-4 result'>{result}</div>}

           { result==="" &&
            <div className='col-span-4 result'>
                {`${first}  ${sign}  ${second}`}
            </div>
            }


        
        <div className='col-span-2' onClick={()=>deleteAll()}>AC</div>
        <div onClick={()=>deleteLast()}>DEL</div>
        <div onClick={()=>Sign("/")}>/</div>

        <div onClick={()=>Number("1")}>1</div>
        <div onClick={()=>Number("2")}>2</div>
        <div onClick={()=>Number("3")}>3</div>
        <div  onClick={()=>Sign("*")}>*</div>

        <div onClick={()=>Number("4")}>4</div>
        <div onClick={()=>Number("5")}>5</div>
        <div onClick={()=>Number("6")}>6</div>
        <div  onClick={()=>Sign("+")}>+</div>

        <div onClick={()=>Number("7")}>7</div>
        <div onClick={()=>Number("8")}>8</div>
        <div onClick={()=>Number("9")}>9</div>
        <div  onClick={()=>Sign("-")}>-</div>

        <div onClick={()=>Number(".")}>.</div>
        <div onClick={()=>Number("0")}>0</div>
        <div className='col-span-2' onClick={()=>Result()}>=</div>
        {/* <div></div> */}

    </div>
  )
}

export default App
