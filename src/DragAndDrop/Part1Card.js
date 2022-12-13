import React from 'react'
import { Draggable } from "react-beautiful-dnd";


const Part1Card = ({image,index,id}) => {
    
  return (
    // <div style={{border:"2px solid red"}}>
    <Draggable  draggableId={id.toString()} index={index}>
    {(provided, snapshot) => (
      <form
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        className={`todos__single ${snapshot.isDragging ? "drag" : ""}`}
      >
      <img  style={{width:'200px',height:"200px"}} src={image}/>
      {/* <p>{name}</p> */}
     </form>
       )}
    </Draggable>    
    // </div>
    )
 }

export default Part1Card
