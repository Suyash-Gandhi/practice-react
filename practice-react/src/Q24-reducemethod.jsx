import { useState } from 'react'

function Q24reducemethod() {
    const [no, setno] = useState(["","", "", ""])

    const handle = (index, value) => {
        const update = [...no]
        update[index] = Number(value)
        setno(update)
    }

    const total = no.reduce((sum, num) => sum + num)

    return (
        <div >
            {
                no.map((num, index) => (
                    <input key={index} type='number' placeholder='enter no' value={num} onChange={(e) => handle(index, e.target.value)} />
                ))
            }

            <h3>{total}</h3>
        </div>
    )
}

export default Q24reducemethod