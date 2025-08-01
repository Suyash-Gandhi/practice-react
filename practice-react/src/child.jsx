import { createContext } from "react"

 export const data = createContext()

export const creditials=createContext()

export function Child({handleclick}) {
  return (
    <div>this is child
        <button onClick={handleclick}>click</button>
    </div>
  )
}






