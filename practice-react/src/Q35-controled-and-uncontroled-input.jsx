import React from 'react'
import { useState } from 'react'

function Q35controledanduncontroledinput() {
    const [controle, setcontroled] = useState("")
    const [text, settext] = useState("")
    //controled 
    const handle = (e) => {
        setcontroled(e.target.value)
    }

    //uncontroled
    const uncontroled = (e) => {
        e.preventDefault()
        const name = e.target.elements.username.value
        settext(name)

    }


    return (
        <div>
            <input type="text" onChange={handle} />
           {controle&&<p>{controle}</p>} 



            <form onSubmit={uncontroled}>
                <input type="text" name="username" />
                <button type='submit'>submit</button>
            </form>
            {text&&<p>{text}</p>}
        </div>
    )
}

export default Q35controledanduncontroledinput