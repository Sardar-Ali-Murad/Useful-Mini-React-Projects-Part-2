import React from 'react'
import { useAppContext } from '../context/appContext'
import Coctails from './Coctails'

const Home = () => {
    let [value,setValue]=React.useState("")
    let {change,searchValue}=useAppContext()

    function handleChange(e){
        change(e.target.value)
    }


  return (
    <div>

      <div className='searchBox'>
         <h2 className='dark'>Search your favaurite coctail</h2>
         <input className='light'  value={searchValue} onChange={handleChange}/>
      </div>
      
      <div>
          <Coctails value={value}/>
      </div>


    </div>
  )
}

export default Home
