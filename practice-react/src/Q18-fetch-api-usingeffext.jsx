import React, { useEffect, useState } from 'react'

function Q18fetchapiusingeffext() {
    const [user, setuser] = useState([])
    useEffect(() => {

        const getdata = async () => {
            try {

                const res = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await res.json()
                setuser(data)
            }

            catch (err) {
                console.log(err);

            }
        }
        getdata()
    }, [])

    return (
        <div>
            <ul>
                {user.map((u => (
                    <li key={u.id}>{u.name} - {u.email}</li>
                )))}
            </ul>

        </div>
    )
}

export default Q18fetchapiusingeffext