import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

function Q26useref() {
const ref=useRef(null)



useEffect(()=>{
ref.current.focus()
})

//In React, the ref attribute in an <input> (or any other DOM 
// element) is used to create a reference to that DOM element 
// so you can directly access and manipulate it — like focusing,
//  reading values, or measuring size — without triggering a 
// re-render.
  return (
    <div>
        <input type="text" ref={ref} />
    </div>
  )
}

export default Q26useref