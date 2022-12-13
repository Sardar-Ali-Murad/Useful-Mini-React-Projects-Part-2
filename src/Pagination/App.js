import React from 'react'
import "./app.css"
import Arr from "./data"


const App = () => {
    let [index,setIndex]=React.useState(0)
    // let Arr=[1,2,3,4,5,6,7,8,9]
    let limit=5
    let start=index*limit
    let final=(index*limit)+limit

    // index=page and suppose the page is 1
    // then 
    // start=(page-1)*limit
    // final=(page-1)*limit+limit
    
    let noOfPages=Math.ceil(Arr.length/limit)

    function pre(){
        let num=index-1
        if(num<0){
          setIndex(index)
        }

        else{
            setIndex((pre)=>pre-1)
        }
    }


    function next(){
        let num=index+1
        if(num>noOfPages-1){
            setIndex(index)
        }
        else{
            setIndex((pre)=>pre+1)
        }
    }


  return (
    <div>
    <div className='Pagination'>
       <button disabled={index<=0?true:false} className='pre light' onClick={pre}>Previous</button>
       <div className='numbers'>{Arr.slice(0,noOfPages).map((all,ind)=><button className={`dark digit ${ind===index?"activeBtn":""}`} onClick={()=>setIndex(ind)}>{ind+1}</button>)}</div>
       <button disabled={index>=noOfPages-1?true:false} className='next light' onClick={next}>Next</button>
    </div>
    {Arr.slice(start,final).map((all,ind)=><h1>{all?.name}{all.id}</h1>)}
    </div>
  )
}

export default App
