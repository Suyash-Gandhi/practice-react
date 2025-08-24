import { useState } from 'react'
import {Parent} from "./parent"

function Q13passingfunctionusingprops() {
    const [text, settext] = useState("")

    const child = () => {
        settext("this is form child")

    }
    return (
        <div><Parent handleclick={child} />{text}</div>
    )
}

export default Q13passingfunctionusingprops