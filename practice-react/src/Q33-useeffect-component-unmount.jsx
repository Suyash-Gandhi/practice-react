import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Unmount(){
     
    useEffect(()=>{
        console.log("mount");

        return ()=>{
            console.log("unmount");
            
        }
        
    })
}

function Q33useeffectcomponentunmount() {

const [show,setshow]=useState(true)

  return (
    <div>
<button onClick={()=>setshow(prev=>!prev)}>
{show?"unmount":"mount"}
</button>
{show&&<Unmount/>}
    </div>
  )
}

export default Q33useeffectcomponentunmount