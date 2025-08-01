import React, { useState } from 'react'
import "./index.css"

function Q31conditionallyapplyingclasses() {

const [active,isactive]=useState(false)
const [dark,isdark]=useState(false)
const [font,setfont]=useState(false)

const handle=()=>{
    isactive(!active)
    isdark(!dark)
    setfont(!font)
}

  return (
    <div className={`${dark?"dark":"light"} ${active?"active":""} ${font?"font":""}`}>
        <h3>preview</h3>
        <button onClick={handle}>click</button>
    </div>
  )
}

export default Q31conditionallyapplyingclasses