import React from 'react'
import { useContext } from 'react'
import { loginContext } from "./parent"

function Q41contextapilogin() {

  const { login, userLogin } = useContext(loginContext)

  return (
    <div>
      <h2>{login}</h2>
      <button onClick={userLogin}>login</button>
    </div>
  )
}

export default Q41contextapilogin