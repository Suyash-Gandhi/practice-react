import {useState} from 'react'

function Q8disablebuttonafter3click() {
const [count,setcount]=useState(0)
const [isdisable,setisdisable]=useState(false)


const disable=()=>{
   
    const newcount=count+1
setcount(newcount)
if (newcount==3) {
    setisdisable(true)
}


}
  return (
    <div>
        <button onClick={disable} disabled={isdisable} >{count}</button>
    </div>
 )
}

export default Q8disablebuttonafter3click