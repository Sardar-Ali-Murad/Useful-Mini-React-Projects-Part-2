import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../context/appContext'


const Single = () => {
    let {single,Single,coctailData}=useAppContext()
    let {Id}=useParams()
    let all=coctailData.find((all)=>all?.idDrink===Id)



    React.useEffect(()=>{
     single(Id)
    },[])



  return (
    <div className='singleCoc'>
      <img src={all?.strDrinkThumb}/>
      <div>

         <div className='cont'>
            <h4>Name</h4>
            <p>{all?.strDrink}</p>
         </div>
         <div className='cont'>
         
            <h4>Category</h4>
            <p>{all?.strCategory}</p>
         </div>
         <div className='cont'>
            <h4>Alcoholic</h4>
            <p>{all?.strAlcoholic}</p>
         </div>
         <div className='cont'>
            <h4>Ingrediants</h4>
            <p>{all?.strIngredient2}  {all?.strIngredient1}  {all?.strIngredient3}</p>
         </div>

         <div className='cont'>
            <h4>Intructions</h4>
            <p>{all?.strInstructions}</p>
         </div>

      </div>
    </div>
  )
}

export default Single
