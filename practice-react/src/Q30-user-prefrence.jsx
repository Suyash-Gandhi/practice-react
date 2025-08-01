import { useState,useEffect } from 'react'

function Q30userprefrence() {

    const [color,setcolor]=useState(localStorage.getItem("color"))
const [font,setfont]=useState(()=>{
    const stored=localStorage.getItem("font")
    return stored !==null?parseInt(stored):20
})

useEffect(()=>{
    localStorage.setItem("color",color)
    localStorage.setItem("fontsize",font)
},[color,font])

  return (
    <div>
        <p style={{color,fontSize:`${font}px`}}>example</p>

        <input type="text"  value={color} 
        onChange={(e)=>setcolor(e.target.value)}
         placeholder='enter color'/>

         <input type="range"  value={font} min="10" max="40"
        onChange={(e)=>setfont(e.target.value)}
         placeholder='enter font'/>
    </div>
  )
}

export default Q30userprefrence