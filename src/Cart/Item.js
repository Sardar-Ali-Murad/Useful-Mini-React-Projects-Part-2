import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useAppContext } from '../context/appContext';
import Total from './Total';

const Item = (props) => {
    let {increase,
        decrease,remove}=useAppContext()

        React.useEffect(()=>{
           if(props.amount<=0){
                 remove(props.id)
           }
        },[decrease])
  return (
    <div>

    <div className='singleItem'>

        {/*  */}

   <div className='info'>

      <div style={{marginLeft:"-35px"}}>
        <h1 className='dark' style={{fontSize:"24px"}}>{props?.title}</h1>
        <p className='light' style={{fontSize:"18px"}}>${props?.price}</p>
        <p className='light' style={{fontSize:"13px",cursor:"pointer"}} onClick={()=>remove(props.id)}>remove</p>
      </div>

   </div>

   {/*  */}
   {/*  */}
   <div className='amount'>
      <ArrowUpwardIcon style={{cursor:"pointer"}} onClick={()=>increase(props.id)}/>
      <p style={{margin:"0px"}}>{props.amount}</p>
       <ArrowDownwardIcon style={{cursor:'pointer'}} onClick={()=>decrease(props.id)}/>
   </div>

   {/*  */}


    </div>

    </div>
  )
}

export default Item
