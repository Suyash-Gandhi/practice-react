import React from 'react';
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



export const Children = React.memo(({ onClick }) => {
  console.log('Child rendered');
  return (
    <div>
      <button onClick={onClick}>Click (Child)</button>
    </div>
  );
});


export const Listitem=React.memo(({ id, text, onUpdate,input }) =>{
  console.log("Rendering item:", id,input);

  return (
    <div>
      <span>{text}</span>
      <button onClick={() => onUpdate(id,input)}>Update</button>
    </div>
  );
})




