import { useState } from 'react'
import {Child} from "./child"
function Q13passingfunctionusingprops() {
    const [text, settext] = useState("")

    const parent = () => {
        settext("this is form parent")

    }
    return (
        <div><Child handleclick={parent} />{text}</div>
    )
}

export default Q13passingfunctionusingprops