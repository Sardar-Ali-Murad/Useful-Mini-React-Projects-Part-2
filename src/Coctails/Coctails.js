import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import Coctail from './Coctail'

const Coctails = ({value}) => {
    let {coctailData,searchValue}=useAppContext()
    console.log(value)
  return (
    <div>
       <h1 style={{textAlign:"center",marginTop:"30px"}}>Coctails</h1> 
       <div className='coctailGrid'>
          {
            coctailData?.filter((all)=>all?.strAlcoholic.toUpperCase().includes(searchValue.toUpperCase())).map((all)=>{
                return <Coctail {...all}/>
            })
          }
       </div>
    </div>
  )
}

export default Coctails
