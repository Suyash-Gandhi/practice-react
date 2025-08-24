import React from 'react'
import { Children } from './parent'
import { useCallback } from 'react'
import { useState } from 'react'
function Q43usecallback() {
  const [input, setinput] = useState(0)
  const [count, setcount] = useState(0)

const handleClick = useCallback(() => {
    console.log('handle click function passed as props rendered');
  }, [count])

  return (
    <div>
      <input type="number" onChange={(e) => setinput(e.target.value)} />
      <button onClick={() => { setcount(input)}}>click (parent)</button>
         <h3>{<Children onClick={handleClick} />}</h3>
    </div>
  )
}

/*
Scenario 1: You click “click (parent)”
This runs:

<button onClick={() => setcount(input)}>click (parent)</button>
Since you're updating state (count), the parent component re-renders.

And here's the key part:

const handleClick = useCallback(() => {
  console.log("handle click function passed as props rendered");
}, [count]);
Because count is a dependency, the handleClick function is re-created.

React sees that the onClick prop for <Children /> has changed, so even 
though Children is memoized using React.memo, it still re-renders.

✅ That’s why you see:

"Child rendered" in console (child re-renders)

The button doesn't call the function — just re-render from new props

Scenario 2: You click “Click (Child)”
This button is inside Children:

<button onClick={onClick}>Click (Child)</button>
It just calls the handleClick function, which logs:

handle click function passed as props rendered

You didn't update any state, so:
Parent doesn't re-render
handleClick doesn’t change
Child doesn’t re-render

✅ That’s why:

You only see the log from the function

"Child rendered" is not logged again (child did not re-render)



*/

export default Q43usecallback