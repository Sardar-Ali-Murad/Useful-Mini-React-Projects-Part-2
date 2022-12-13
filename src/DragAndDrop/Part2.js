
import {arr1,arr2} from "./data"
import React from 'react'

import { DragDropContext} from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import Part1Card from './Part1Card';

import { Draggable } from "react-beautiful-dnd";
import "./app.css"

const Part2 = () => {
  let [array1,setArray1]=React.useState(arr1)
  let [array2,setArray2]=React.useState(arr2)
   
    function onDragEnd(result){
       if(!result.destination)return
      console.log(result)

       if(result.source.droppableId===result.destination.droppableId && result.source.droppableId==="List1"){
         let newData1=array1
         let source=array1[result.source.index]

         let removedPart=newData1.splice(result.source.index,1)
         newData1.splice(result.destination.index,0,source)
         setArray1(newData1)
       }

       if(result.source.droppableId===result.destination.droppableId && result.source.droppableId==="List2"){
        let newData2=array2
        let source=array2[result.source.index]

        let removedPart=newData2.splice(result.source.index,1)
        newData2.splice(result.destination.index,0,source)
        setArray2(newData2)
       }

       if(result.source.droppableId!==result.destination.droppableId){
          let data1=array1
          let data2=array2
          let realSource;
          if(result.source.droppableId==="List1"){
               realSource=array1[result.source.index]
          }
          else{
            realSource=array2[result.source.index]
          }

          if(result.source.droppableId==="List1"){
            let removedPart=data1.splice(result.source.index,1)
            data2.splice(result.destination.index,0,realSource)
          }

          else{
            let removedPart=data2.splice(result.source.index,1)
            data1.splice(result.destination.index,0,realSource)
          }

          setArray1(data1)
          setArray2(data2)

       }

    }
  return (
    <div >
        {/* Part2 */}
      <DragDropContext onDragEnd={onDragEnd}>

       {/* The Drappable 1 starts */}
      <Droppable droppableId="List1"  >
        {(provided, snapshot) => (
          <div
          className={`todos grid-22 ${snapshot.isDraggingOver ? "dragactive" : ""}`}
          ref={provided.innerRef}
          {...provided.droppableProps}
            >
                {
                  array1.map((info,index)=>{
                        return  <Draggable   draggableId={info.id.toString()} index={index}>
                        {(provided, snapshot) => (
                          <form
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          className={`todos__single ${snapshot.isDragging ? "drag" : ""}`}
                            // style={{border:"2px solid"}}
                            >
                          <img  style={{width:'200px',height:"200px"}} src={info.image}/>
                          {/* <p>{name}</p> */}
                         </form>
                           )}
                        </Draggable>    
                    })
                  }
            
          {provided.placeholder}
          </div>
        )}
      </Droppable>
     {/* The Drppable 1 ends */}
    
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
     {/* The Drppable 2 starts */}
     <Droppable droppableId="List2"  >
        {(provided, snapshot) => (
          <div
          className={`todos grid-22 ${snapshot.isDraggingOver ? "dragactive" : ""}`}
          ref={provided.innerRef}
          {...provided.droppableProps}
            >
                {
                  array2.map((info,index)=>{
                        return  <Draggable   draggableId={info.id.toString()} index={index}>
                        {(provided, snapshot) => (
                          <form
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          className={`todos__single ${snapshot.isDragging ? "drag" : ""}`}
                            // style={{border:"2px solid"}}
                            >
                          <img  style={{width:'200px',height:"200px"}} src={info.image}/>
                          {/* <p>{name}</p> */}
                         </form>
                           )}
                        </Draggable>    
                    })
                  }
            
          {provided.placeholder}
          </div>
        )}
      </Droppable>

      {/* The droppable 2 ends */}
        </DragDropContext>
    </div>
  )
}

export default Part2
