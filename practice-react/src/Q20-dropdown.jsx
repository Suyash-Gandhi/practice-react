
import React, { useState } from 'react'
import "./index.css"


function Q20dropdown() {

    const [fruit, setfruit] = useState("")
    const handlefruit = (e) => {

        setfruit(e.target.value)
    }

    return (<>
        <div className='dropdown' >
            you have selected {fruit}
        </div>
        <select name="fruits" className="fruits" onChange={handlefruit} >
            <option name="select" value="select" >select a fruit</option>
            <option name="apple" value="apple" >apple</option>
            <option name="banana" value="banana" >banana</option>
            <option name="mango" value="mango" >mango</option>
        </select>


    </>
    )
}

export default Q20dropdown
