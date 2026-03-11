import { useState } from "react"

export default function Canvas({elements,setElements,selected,setSelected}){

const [dragging,setDragging] = useState(null)

const grid = 20

const handleMouseDown = (id)=>{

 setDragging(id)
 setSelected(id)

}

const handleMouseUp = ()=>{

 setDragging(null)

}

const handleMouseMove = (e)=>{

 if(dragging===null) return

 const x = Math.round(e.nativeEvent.offsetX/grid)*grid
 const y = Math.round(e.nativeEvent.offsetY/grid)*grid

 setElements(

  elements.map(el=>
   el.id===dragging
   ? {...el,x,y}
   : el
  )

 )

}

return(

<div
 className="canvas"
 onMouseMove={handleMouseMove}
 onMouseUp={handleMouseUp}
>

{elements.map(el=>{

if(el.type==="text"){

return(

<p
 key={el.id}

 onMouseDown={()=>handleMouseDown(el.id)}

 style={{
  position:"absolute",
  left:el.x,
  top:el.y,
  cursor:"move",
  border:selected===el.id?"1px solid blue":"none",
  zIndex:el.z
 }}
>

{el.text}

</p>

)

}

return(

<div
 key={el.id}

 onMouseDown={()=>handleMouseDown(el.id)}

 style={{
  position:"absolute",
  left:el.x,
  top:el.y,
  width:el.width,
  height:el.height,
  background:el.color,
  border:selected===el.id?"2px solid #2962ff":"none",
  boxShadow:selected===el.id?"0 0 8px rgba(0,0,0,0.3)":"none",
  cursor:"move",
  zIndex:el.z
 }}
/>

)

})}

</div>

)

}