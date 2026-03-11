import html2canvas from "html2canvas"

export default function Toolbar({
 addRectangle,
 addText,
 deleteElement,
 duplicate,
 bringForward,
 sendBackward
}){

const exportPNG = ()=>{

 html2canvas(document.querySelector(".canvas"))
 .then(canvas=>{
  const link = document.createElement("a")
  link.download = "design.png"
  link.href = canvas.toDataURL()
  link.click()
 })

}

return(

<div className="toolbar">

<button onClick={addRectangle}>Rectangle</button>

<button onClick={addText}>Text</button>

<button onClick={duplicate}>Duplicate</button>

<button onClick={deleteElement}>Delete</button>

<button onClick={bringForward}>Forward</button>

<button onClick={sendBackward}>Backward</button>

<button onClick={exportPNG}>Export PNG</button>

</div>

)

}