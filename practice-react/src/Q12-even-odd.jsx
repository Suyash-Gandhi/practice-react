import {useState} from 'react'

function Q12evenodd() {
const [no,setno]=useState()
const [result,setresult]=useState()



const check=()=>{
    if (isNaN(no)) {
        setresult("enter a no")
    }
    else{
setresult(no%2===0?"no is even":"no is odd")
    }

}
  return (
    <div>
<input type="number" placeholder='enter no' onChange={(e)=>{
    setno(e.target.value)
}}/>
<button onClick={check}>check</button>
{result}
    </div>
  )
}

export default Q12evenodd