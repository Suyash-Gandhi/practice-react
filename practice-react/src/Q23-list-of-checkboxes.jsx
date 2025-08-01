import React, { useState } from 'react'

function Q23listofcheckboxes() {
    const [check, ischeck] = useState({})

    const skills = ["nodejs", "javascript", "reactjs", "expressjs","mongodb"]

    const handle = (event) => {
        const {name,checked}=event.target
ischeck((prev)=>({
    ...prev,[name]:checked,
    
    
}))
    }

    return (
        <div>
            {skills.map((skill) => (
                <div key={skill}>
                    <input type="checkbox" name={skill}  checked={!!check[skill]} onChange={handle}/>
                    <label>{skill}</label>
                     
                </div>
            ))}
            <div>
               <h3>skill selected : {Object.keys(check).filter(key=>check[key]).join(" ,")}</h3>
            </div>
        </div>
    )
}

export default Q23listofcheckboxes