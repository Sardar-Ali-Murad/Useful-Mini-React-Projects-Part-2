
import React from 'react'
import "./app.css"
import Tour from './Tour'
const App = () => {
    let [tours,setTours]=React.useState([])
    let [loading,setLoading]=React.useState(true)
 

     const fetchTours=async ()=>{
         setLoading(true)
         let data=await fetch("https://course-api.com/react-tours-project")
         let realData=await data.json()
        setLoading(false)
         setTours(realData)
     }


    React.useEffect(()=>{
        fetchTours()
    },[])
 

    function clear(id){
        setTours((pre)=>{
            return pre.filter((all)=>all?.id!==id)
        })
    }


    if(loading){
        return <h1>Loading...</h1>
    }

    if(tours.length<1){
        return <div className='center' style={{textAlign:"center"}}>
            <h2>No Tours To Show Fetch Again</h2>
            <button className='btn' onClick={()=>fetchTours()}>Refresh</button>
        </div>
    }

    

   

  return (
      <div className='ToursMain'>


    <h1 className='Heading'>Our Tours</h1>
    <div className='toursLine'></div>
    
    <div>
        {
            tours.map((all)=>{
                return <Tour image={all?.image} price={all?.price} info={all?.info} id={all?.id} clear={clear} name={all?.name}/>
            })
        }
    </div>

    </div>

      
    
  )
}
    
export default App
