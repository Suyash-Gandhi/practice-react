import React from 'react'
import { usepress } from './hooks'
function Q39keypress() {
    const press=usepress()
    return (
        <div>
key pressed : {press}
        </div>
    )
}

export default Q39keypress