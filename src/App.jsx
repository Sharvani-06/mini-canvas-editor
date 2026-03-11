import { useState, useEffect } from "react"
import Canvas from "./components/Canvas"
import Toolbar from "./components/Toolbar"

function App(){

const [elements,setElements] = useState([])
const [selected,setSelected] = useState(null)

const colors = ["#FF6B6B","#4ECDC4","#FFD93D","#6C5CE7"]

const addRectangle = ()=>{

 const newRect = {
  id:Date.now(),
  type:"rect",
  x:100,
  y:100,
  width:120,
  height:80,
  color:colors[Math.floor(Math.random()*colors.length)],
  z:elements.length
 }

 setElements([...elements,newRect])

}

const addText = ()=>{

 const newText = {
  id:Date.now(),
  type:"text",
  x:200,
  y:200,
  text:"Hello",
  z:elements.length
 }

 setElements([...elements,newText])

}

const deleteElement = ()=>{
 setElements(elements.filter(el=>el.id!==selected))
 setSelected(null)
}

const duplicate = ()=>{

 const el = elements.find(e=>e.id===selected)

 if(!el) return

 const copy = {
  ...el,
  id:Date.now(),
  x:el.x+20,
  y:el.y+20
 }

 setElements([...elements,copy])
}

const bringForward = ()=>{

 setElements(
  elements.map(el =>
   el.id===selected
   ? {...el,z:el.z+1}
   : el
  )
 )

}

const sendBackward = ()=>{

 setElements(
  elements.map(el =>
   el.id===selected
   ? {...el,z:el.z-1}
   : el
  )
 )

}

useEffect(()=>{

 const handleKey = (e)=>{
  if(e.key==="Delete") deleteElement()
 }

 window.addEventListener("keydown",handleKey)

 return ()=> window.removeEventListener("keydown",handleKey)

},[selected])

return(

<div>

<h1>Mini Canvas Editor</h1>

<Toolbar
 addRectangle={addRectangle}
 addText={addText}
 deleteElement={deleteElement}
 duplicate={duplicate}
 bringForward={bringForward}
 sendBackward={sendBackward}
/>

<Canvas
 elements={elements}
 setElements={setElements}
 selected={selected}
 setSelected={setSelected}
/>

</div>

)

}

export default App