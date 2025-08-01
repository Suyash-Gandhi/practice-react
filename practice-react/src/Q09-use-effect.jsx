import {useState,useEffect} from 'react'

function Q9useeffect() {
    const[currentdate,setdate]=useState(new Date())

     useEffect(()=>{
      const interval=setInterval(()=>{
        setdate(new Date())
      },[])
     })


  return (
    <div>
{currentdate.toLocaleDateString()}
{currentdate.toLocaleTimeString()}

    </div>
  )
}

export default Q9useeffect