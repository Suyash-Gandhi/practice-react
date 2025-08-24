import { useMemo } from "react"
import { useState } from "react"


function Q42usememo() {
    const [input, setinput] = useState(0)
    const [count, setcount] = useState(0)
    const [shouldCompute,setshouldCompute]=useState(false)
    const calculate = (num) => {
        const start = Date.now()

        for (let i = 0; i < 10000; i++) {
            console.log("calculating");
        }

        const end = Date.now()
        const result = num * 2
        console.log(result, " time taken: ", end - start, " ms");
        return result
    }
    const heavycomputation = useMemo(() => {
        if(!shouldCompute)return null
        return calculate(count)
    }, [shouldCompute ,count])
    return (
        <div>
            <input type="number" onChange={(e) => setinput(e.target.value)} />
            <button onClick={() => {setcount(input) ,setshouldCompute(true)}}>click</button>
            <p>result:{heavycomputation}</p>
            <h4>time taken shown in console</h4>
        </div>
    )
}

export default Q42usememo