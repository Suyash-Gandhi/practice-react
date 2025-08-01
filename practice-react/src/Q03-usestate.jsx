import React,{useState} from 'react'

function Q3usestate() {
    const [ison,setison]=useState(0)

    const handleclock =()=>{
setison(!ison)
    }
  return (<>
    <button onClick={handleclock}> button</button>
    <div>{ison?"on":"off"}</div>
    </>
  )
}

export default Q3usestate