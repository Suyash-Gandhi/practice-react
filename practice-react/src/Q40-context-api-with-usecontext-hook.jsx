import React from 'react'
import { useContext } from 'react'
import { themeToggle } from "./parent"
import "./index.css"

function Q40contextapiwithusecontexthook() {
  const { theme, toggleTheme } = useContext(themeToggle)
  return (
    <div>
      <h2 className={theme}>theme</h2>
      <button onClick={toggleTheme}>toggle</button>
    </div>
  )
}

export default Q40contextapiwithusecontexthook
