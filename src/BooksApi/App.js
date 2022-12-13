import React from 'react'
import Header from './Header'
import Img1 from "./books.jpg"
import Img2 from "./books2.png"
import {AiOutlineClose} from "react-icons/ai"

const App = () => {
    // AIzaSyB6ebRGIYSOiXBW3UueirhXbswObaWSC2o

    let [value,setValue]=React.useState("")
    let [cond,SetCond]=React.useState(false)
    let [data,setData]=React.useState([])
    let [model,setModel]=React.useState(false)
    let [modelInfo,setModelInfo]=React.useState({})

    React.useEffect(()=>{
     let start=async ()=>{
       let data=await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&key=AIzaSyB6ebRGIYSOiXBW3UueirhXbswObaWSC2o`)
       let json=await data.json()
       setData(json?.items)
     }
     start()
    },[cond])

    function handleBook(e){
        e.preventDefault() 
         SetCond((pre)=>!pre)
    }
    
    function modelHandler(id){
        let book=data.find((all)=>all?.id===id)
        setModelInfo(book)
        setModel(true)
    }

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

      function close(){
        setModel(false)
        setModelInfo({})
      }
    
    console.log(model,modelInfo)
  return (
      <div className='main'>

        {
            model && <div className='model-main'>
                 <div className='model-Overlay'></div>
                 <div className='book-card  div-perfect-center'>

                    <div className='grid-even-2 model-flex'>
                        <AiOutlineClose className='close' onClick={close}/>
                       <img src={modelInfo?.volumeInfo?.imageLinks?.thumbnail}/>
                       <div className='book-content-model'>
                         <h3>{modelInfo?.volumeInfo?.title}</h3>
                         <h4>{modelInfo?.volumeInfo?.authors[0]}</h4>
                         <h5>{modelInfo?.publisher}</h5>
                       <button className='btn' onClick={()=>openInNewTab(modelInfo?.volumeInfo?.canonicalVolumeLink)}>More</button>
                       </div>
                    </div>
                    
                    <p style={{marginTop:"30px"}}>{modelInfo?.volumeInfo?.description.substring(0,500)}...</p>
                 </div>
           </div>
       }

  <div className='books-header-main flex-even'>
    {/*  */}
    <div className='image'>
        <div className='books-outline'></div>
        <img src={Img1}/>
        <h4 className='quote' style={{color:'white',position:"relative",zIndex:"20"}}>A Room Without Books Is Like The Body Without The Soul</h4>
    </div>

    <div className='content'>
        <h2>Find A Books</h2>
        <form onSubmit={handleBook}>
            <input className='light' placeholder='Search Books...' value={value} onChange={(e)=>setValue(e.target.value)}/>
        </form>
        <img src={Img2} />
    </div>

    </div>

    {/* Headers ends */}
    {  data?.length >0 &&

        <div className='main-books'>
    <div className='main-books grid-14 div-center-90'>
        { 
            data?.map((all)=>{
                return(
                    
                    <div className='single-book' onClick={()=>modelHandler(all?.id)}>
                    <img src={all?.volumeInfo?.imageLinks?.thumbnail}/>
                     <a className='name light div-center-80'>{all?.volumeInfo?.title}</a>
                </div>
                )
            })
        }
    </div>
        </div>
}
    </div>
  )
}

export default App
