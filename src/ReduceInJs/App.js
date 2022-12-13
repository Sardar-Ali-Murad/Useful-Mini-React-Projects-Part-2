import { CollectionsBookmark, CollectionsBookmarkOutlined } from '@mui/icons-material'
import React from 'react'
// This is only for the consoles
import data from "./data"
import data2 from "./data2"
const App = () => {
    let [info,setInfo]=React.useState(data)
    let [total,setTotal]=React.useState(0)
    let [obj,setObj]=React.useState({})
    let [info2,setInfo2]=React.useState(data2)

    React.useEffect(()=>{
      let newTotal=info.reduce((total,current)=>{
           total+=current.amount
          return total
      },0)
      setTotal(newTotal)
    },[])

    React.useEffect(()=>{
      let newObj=info.reduce((total,current)=>{
           total.amount+=current.amount
           total.totalPrice+=current.amount*current.price 
           return total
      },{
        amount:0,
        totalPrice:0
      })

      setObj(newObj)
    },[])

    React.useEffect(()=>{
      let newObj=info2.reduce((total,current)=>{
         let {language}=current

        //  if(language){
        //      if(total[language]){
        //         total[language]=total[language]+1
        //      }

        //      else{
        //         total[language]=1
        //      }
        //  }

        if(language){
            total[language]=total[language]+1 || 1
        }
         return total
      },{})
      console.log(newObj)
    },[])

//    The dynamic Object Keys
// It gives the value basically
    // let nam="Sardar"
    // let object={
    //     [nam]:"Munna"
    // }
    // console.log(object)

    // dehaves differently in objects

    // let tast={
    //     no1:"no111",
    //     no2:"no2222"
    //     }

    //     console.log(tast["no1"])
    //     console.log(tast["no2"])

    //     tast["no3"]="no3333"

    //     console.log(tast)

    //     if(tast["no1"]){
    //         console.log("This will runs")
    //     }

    //     if(tast["no23"]){
    //         console.log("This will not runs")
    //     }



    // console.log(total,obj)
  return (
    <div>
       Reduce
    </div>
  )
}

export default App
