import {useState,useEffect} from 'react'
import react from "react"

function Q16useeffectlogmessagonrender() {
    const [count,setcount]=useState(0)
    const [text,settext]=useState("")
    useEffect(()=>{
        settext("message for "+count+" state");
    })

    
  return (
    <div>
        <button onClick={()=>setcount(count+1)}>click</button>
        {text}
    </div>
  )
}

export default Q16useeffectlogmessagonrender
