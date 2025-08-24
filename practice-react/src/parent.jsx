import React from 'react';
import { createContext } from "react"
import { useState } from "react"
import Q40contextapiwithusecontexthook from "./Q40-context-api-with-usecontext-hook"
import Q41contextapilogin from "./Q41-context-api-login"
//13

export function Parent({ handleclick }) {
  return (
    <div>this is parent
      <button onClick={handleclick}>click</button>
    </div>
  )
}


// Q40 

export const themeToggle = createContext()

export function Toggle() {

  const [theme, settheme] = useState("light")

  const toggleTheme = () => {
    settheme(theme === "light" ? "dark" : "light")
  }

  return (
    <themeToggle.Provider value={{ theme, toggleTheme }}>
      <Q40contextapiwithusecontexthook />
    </themeToggle.Provider>
  )
}

//Q41

export const loginContext = createContext()

export function Login() {
  const [login, setLogin] = useState("loged out")

  const userLogin = () => {
    setLogin(login === "loged out" ? "loged in" : "loged out")
  }

  return (
    <loginContext.Provider value={{ login, userLogin }}>
      <Q41contextapilogin />
    </loginContext.Provider>
  )
}


//Q44

export const Children = React.memo(({ onClick }) => {
  console.log('Child rendered');
  return (
    <div>
      <button onClick={onClick}>Click (Child)</button>
    </div>
  );
});


export const Listitem = React.memo(({ id, text, onUpdate, input }) => {
  console.log("Rendering item:", id, input);

  return (
    <div>
      <span>{text}</span>
      <button onClick={() => onUpdate(id, input)}>Update</button>
    </div>
  );
})
