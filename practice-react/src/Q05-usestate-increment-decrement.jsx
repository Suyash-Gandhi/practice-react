import { useState } from "react"


function Q5usestateincrementdecrement() {

let [counter,setcounter]=useState(0)

const increment=()=>{
    setcounter(counter+1)
}

const decrement=()=>{
    setcounter(counter-1)
}

  return (<>
  <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    <div>{counter}</div>
  </>
    
  )
}

export default  Q5usestateincrementdecrement
