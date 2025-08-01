import React from 'react'
import { useRef } from 'react'

function Q27userefcounter() {

    const count = useRef(0)
    
    const handle=()=>{
        count.current+=1
        console.log(count.current);
        
    }

    /*
Any time you update the UI (e.g., by changing JSX output), 
React will re-render that part of the component.

However, there's a key difference between:

useRef — stores values without causing re-renders 
(but doesn’t show live updates).

useState — stores values and causes re-renders when updated 
(ideal for live UI updates).

So is there no way to show a live count without re-render?
If by “live” you mean updating the UI on every click, then 
you must use useState.
If you want to track clicks silently (without re-render) and 
then show the value on-demand, use useRef.


Q difference between this count.current=count+1 and count.current+=1

=> count.current += 1
This is the correct way to increment the .current value inside a useRef:

count.current = count.current + 1;
This shorthand:

count.current += 1;
means:

"Take the current value, add 1, and assign it back to current."

 count.current = count + 1
This is likely a mistake. Here's what it actually means:

count is the whole ref object, not the value.

count + 1 will result in a string like:

"[object Object]1"
Then count.current becomes a corrupted value (a string), not a number.

This happens because:

count is an object: { current: 0 }

count + 1 → [object Object] + 1 → "1[object Object]"


    */
  return (
    <div>

        <button onClick={handle}>click</button>
        <h3>result in console</h3>
    </div>
  )
}

export default Q27userefcounter