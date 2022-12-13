import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import Single from './Single'

const Coctail = (props) => {
    let {single}=useAppContext()
    
  return (
    <div className='singleCoctail'>
                    <img src={props?.strDrinkThumb}/>
                    <div style={{padding:"20px"}}>
                    <h1 className='dark'>{props?.strDrink}</h1>
                    <h1 className='dark'>{props?.strAlcoholic}</h1>
                    <p className='light'>{props?.strCategory}</p>
                    <p className='details dark'>
                        <Link to={`/Single/${props?.idDrink}`} style={{color:"black"}} onClick={()=>single(props)}>Details</Link>
                    </p>
                    </div>
                </div>
  )
}

export default Coctail
