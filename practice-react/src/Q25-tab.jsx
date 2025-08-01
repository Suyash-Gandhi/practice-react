import React from 'react'
import { useState } from 'react'

function Q25tab() {

    const [tab, settab] = useState("home")

    const handle = () => {
        switch (tab) {
            case 'home':
                return <h3>home</h3>
            case 'about':
                return <h3>about</h3>
            case 'profile':
               return  <h3>profile</h3>
            default:
                return null
        }
    }
    return (
        <div>
            {['home','about','profile'].map((tab)=>(
                <button key={tab} onClick={()=>settab(tab)}>{tab}</button>
            ))}
            <div>{handle()}</div>
        </div>
    )
}

export default Q25tab