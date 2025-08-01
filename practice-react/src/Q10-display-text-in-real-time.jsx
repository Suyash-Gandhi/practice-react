import {useState} from 'react'

function Q10displaytextinrealtime() {
  const [text,settext]=useState("")
  return (
    <div>
      <input type="text" onChange={(e)=>{
settext(e.target.value)
      }} />
      <p>{text}</p>
    </div>
  )
}

export default Q10displaytextinrealtime