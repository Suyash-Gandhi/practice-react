import { useState } from "react"
import "./index.css"


function Q6togelcoller() {

  const [color, setcolor] = useState(0)

  const toggel = () => {
    setcolor(!color)
  }

  return (
    <div className={color ? "red" : "green"}>
      color
      <button onClick={toggel}>toggel</button>
    </div>
  )
}

export default Q6togelcoller