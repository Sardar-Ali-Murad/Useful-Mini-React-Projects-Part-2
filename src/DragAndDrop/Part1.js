import React from 'react'
import {arr1} from "./data"
import { DragDropContext} from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";
import Part1Card from './Part1Card';

const App = () => {
    let [data,setData]=React.useState(arr1)
    function onDragEnd(result){
        if(result.destination && result.source){
             let newData=data
              let source=data[result.source.index]
             let removedPart=newData.splice(result.source.index,1)
             newData.splice(result.destination.index,0,source)
            console.log(newData)
        }
    }
  return (
    <div>
       <DragDropContext onDragEnd={onDragEnd}>
           <div className='main-box'>
           <Droppable droppableId="List">
        {(provided, snapshot) => (
          <div style={{border:"2px solid blue",width:"300px"}}
            className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
            >
                {
                    data.slice(0,3).map((info,index)=>{
                        return <Part1Card id={info.id} name={info.nam} text={info.text} image={info.image} index={index}/>
                    })
                }
            
          {provided.placeholder}
          </div>
        )}
      </Droppable>

           </div>
       </DragDropContext>
    </div>
  )
}

export default App
