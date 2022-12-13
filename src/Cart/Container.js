import React from 'react'
import { useAppContext } from '../context/appContext'
import Item from './Item'
import Total from './Total'

const Container = () => {
    let {Items}=useAppContext()
  return (
    <div>
      <h1 className='dark' style={{fontSize:"26px",textAlign:"center"}}>Your Bag</h1>

      {Items.length>0?
       <>
          <div>
        {
            Items?.map((all)=>{
                return <Item {...all}/>
            })
        }
      </div>
      <Total/>:
      <p></p>

      </>:
      <>
       <p className='light' style={{textAlign:'center',marginLeft:"50%",transform:'translate(-50%'}}>There is no Item to display</p>
      </>
    }
    </div>
  )
}

export default Container
