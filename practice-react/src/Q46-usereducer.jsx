import { useReducer } from "react"


const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }
    case "decrement":
      return { count: state.count - 1 }
    case "reset":
      return { count: 0 }
    case "incrementBy":
      return { count: state.count + action.payload }
    case "decrementBy":
      return { count: state.count - action.payload }
    default:
      return state
  }
}

function Q46usereducer() {

  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <div>
      <h2>Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

      {/* Using payload */}
      <button onClick={() => dispatch({ type: "incrementBy", payload: 5 })}>
        +5
      </button>
      <button onClick={() => dispatch({ type: "decrementBy", payload: 5 })}>
        -5
      </button>
    </div>
  )
}

export default Q46usereducer