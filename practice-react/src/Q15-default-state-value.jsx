import {useState} from 'react'

function Q15defaultsattevalue() {
const [name,setname]=useState('')
const [age,setage]=useState()

const defaultt=()=>{
setage()
setname("")
}

  return (
    <div>
<input type="text" placeholder='enter name' onChange={(e)=>setname(e.target.value)}/>
<input type="number" placeholder='enter age' onChange={(e)=>setage(e.target.value)}/>
<p>{name}</p>
{age}
<button onClick={defaultt}>reset</button>
    </div>
  )
}

export default Q15defaultsattevalue