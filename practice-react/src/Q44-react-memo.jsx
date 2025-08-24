import React, { useState } from "react";
import { Listitem } from "./parent";
import { useCallback } from "react";

function Q44reactmemo() {

  const [items, setItems] = useState([
    { id: 1, text: "Apple" },
    { id: 2, text: "Banana" },
    { id: 3, text: "Cherry" },
  ]);

  const [input, setInput] = useState("");
  const [set, setset] = useState("")

  const updateItem = useCallback((id,newtext) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, text: newtext || item.text } : item
      )
    );
  },[]);

  return (
    <div>
      <input
        placeholder="New item text"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={(e) => setset(input)}>store item</button>
      {items.map(item => (
        <Listitem
          key={item.id}
          id={item.id}
          text={item.text}
          onUpdate={updateItem}
          input={set}
        />
      ))}
    </div>
  );

}

export default Q44reactmemo