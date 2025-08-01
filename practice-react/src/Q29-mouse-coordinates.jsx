import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Q29mousecoordinates() {
const [cords,setcords]=useState({x:0,y:0})

useEffect(()=>{
    const handlemove=(e)=>{
        setcords({
            x:e.clientX,
            y:e.clientY
        })
    }

    window.addEventListener("mousemove",handlemove)


    return ()=>{
        window.removeEventListener("mousemove",handlemove)
    }
})




  return (
    <div>
        <h3> X : {cords.x} <br /> Y : {cords.y}</h3>
    </div>
  )
}

export default Q29mousecoordinates