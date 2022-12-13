import React from 'react'
import "./app.css"
import {MdDelete} from "react-icons/md"
import {AiOutlineEdit} from "react-icons/ai"
import Alert from './Alert'
import { FcUndo } from 'react-icons/fc'
const App = () => {
    let [item,setItem]=React.useState("")
    let [items,setItems]=React.useState(JSON.parse(localStorage.getItem("Items")) || [])
    let [edit,setEdit]=React.useState(false)
    let [editId,setEditId]=React.useState(null)
    let [alert,setAlert]=React.useState(false)
    let [color,setColor]=React.useState("")
    let [text,setText]=React.useState("")

    function submit(){
        if(item!==""){
            setItems((pre)=>{
                return [...pre,{text:item,id:pre.length!==0?pre[pre.length-1].id+1:1}]
            })
            setItem("")

            setAlert(true)
            setColor("success")
            setText("The Item Is Addedd Successfully")
            clearAlert()
        }
    }

    function clearAlert(){
        setTimeout(()=>{
            setAlert(false)
            setColor("")
            setText("")
        },3000)
    }

    function del(id){
        setItems((pre)=>pre.filter((all)=>all.id!==id))
        setAlert(true)
        setColor("danger")
        setText("The Item Is Deleted Successfully")
        clearAlert()
    }

    function clear(){
        setItems([])
    }

    
    function editFun(id,text){
        setEdit(true)
        setEditId(id)
        setItem(text)
    }

    function editHandler(){
        if(item!==""){
            setItems((pre)=>{
                return pre.map((all)=>all.id===editId?{...all,text:item}:all)
            })
            setEdit(false)
            setEditId(null)
            setItem("")
            setAlert(true)
            setColor("success")
            setText("The Item Is Edited Successfully")
            clearAlert()
        }
    }
    
    
    
    React.useEffect(()=>{
      localStorage.setItem("Items",JSON.stringify(items))
    },[items])
    


  return (
    <div className='todoMain'>
       <div className='todoCard'>
        {
          alert &&
            <Alert color={color} text={text}/>
        }

         <h1 className='dark' style={{textAlign:"center"}}>Grocery Bud</h1>

         <div className='btnsInput'>
            <input placeholder='e.g Eggs' className='light' value={item} onChange={(e)=>setItem(e.target.value)}/>
            {
               !edit ? <button className='btn' onClick={submit}>Submit</button>:
                 <button className='btn' onClick={editHandler}>Edit</button>
            }
         </div>

         <div className='items'>
           {
            items?.map((all)=>{
                return<div id={all?.id} className="singleItem">
                    <p className='dark'>{all?.text}</p>
                    <div style={{display:"flex"}}>
                       <MdDelete onClick={()=>del(all?.id)} style={{fontSize:"20px",color:"red",marginRight:"20px",cursor:"pointer"}}/>
                       <AiOutlineEdit onClick={()=>editFun(all?.id,all?.text)} style={{fontSize:"20px",color:"blue",cursor:"pointer"}}/>
                    </div>
                </div>
            })
           }
         </div>

       {
        items.length>0 &&
           <button className='clear' onClick={clear}>Clear All</button>
       }
       </div>
    </div>
  )
}

export default App
