import React from 'react'
import data from "./data"
import "./app.css"
import Review from "./Review"

const App = () => {
    let [reviews,setReviews]=React.useState(data)
    let [count,setCount]=React.useState(0)
    
    function next(){
        if(count>=reviews.length-1){
            setCount(0)
        }
        else{
            setCount((pre)=>pre+1)
        }
    }

    function before(){
        if(count<=0){
            setCount(reviews.length-1)
        }
        else{
            setCount((pre)=>pre-1)
        }
    }

    function random(){
        setCount( Math.floor(Math.random() * reviews.length))
    }

   
    console.log(count)
  return (
    <div className='ReviewsMain'>
       <h1 className='Heading'>Our Tours</h1>
       <div className='toursLine'></div>

       <div className='cardMain'>
            <Review props={reviews[count]} next={next} before={before} random={random}/>
       </div>
    </div>
  )
}

export default App
