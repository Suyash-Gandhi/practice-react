import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Q34pagination() {

    const [current, setcurrent] = useState(1)
    const [data, setdata] = useState([])


    const fetchdata = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${current}`)
        const result = await res.json()
        setdata(result)
    }

    useEffect(() => {
        fetchdata()
    }, [current])

    return (
        <div>
            {
                data.map((item) => (
                    <div key={item.id}>
                        {item.id}.{item.title}
                    </div>
                ))
            }

            <button onClick={() => setcurrent(prev => Math.max(prev - 1, 1))} disabled={current === 1}> previous</button>

            <button onClick={() => setcurrent(prev => prev + 1)}>next</button>
        </div>
    )
}

export default Q34pagination