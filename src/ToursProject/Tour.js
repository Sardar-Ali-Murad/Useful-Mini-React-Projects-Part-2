import React from 'react'

const Tour = ({image,info,name,price,clear,id}) => {
    let [details,setDetails]=React.useState(false)
  return (
    <div>
      <div className='singleTour'>
                <img className='image' src={image}/>
                <div style={{padding:"15px"}}>
                  <div className='frontInfo'>
                      <h2 className='dark'>{name}</h2>
                      <p className='light'>{price}</p>
                  </div>
                  {
                    !details?
                      <p className='light'>{info.substring(0,info.length/2)}...        <a style={{color:"blue",textDecoration:"underline",cursor:"pointer"}} onClick={()=>setDetails(true)}>Show More</a></p>:
                      <p className='light'>{info } <a style={{color:"blue",textDecoration:"underline",cursor:"pointer"}} onClick={()=>setDetails(false)}>Show Less</a></p>
                  }
                 
                   <button className='btn' onClick={()=>clear(id)}>Not Intrested</button>
                </div>
            </div>
    </div>
  )
}

export default Tour
