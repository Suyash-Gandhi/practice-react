import React, { useState, useEffect } from 'react'

export default function Q22filtermethod() {
  const [user, setuser] = useState([])
  const [userdata, setuserdata] = useState([])
  const [inputn,setinputn]=useState("")
  
  useEffect(() => {
    const handle = async () => {
      const api = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await api.json()
      setuser(data)
    }
    handle()
  }, [])

  useEffect(() => {
    if (user.length > 0) {

      const da = user.filter(u => u.name === inputn)
      setuserdata(da)
      console.log(userdata);


    }
  }, [user,inputn])


  /*
  The <pre> tag in HTML stands for "preformatted text".
  
  ✅ What it does:
  It preserves:
  
  Whitespace
  
  Tabs
  
  Line breaks
  
  It displays text exactly as you write it in the source code.
  
   In React, it's especially useful when displaying:
  JSON.stringify(data, null, 2) (formatted JSON)
  
  Multi-line text
  
  Code blocks
  
  Console-like outputs
  
  
  
  Object.entries(user) turns the object into an array
  
  You can then .map() over that array to display all key-value pairs.
  For nested objects like address, company, etc., we use:
  
  typeof value === 'object' ? JSON.stringify(value) : value
  to safely convert them to string (or you can display them more neatly if needed).
  
  */

  return (
    <div>
      <h3>enter user</h3>
      <input type="text" onChange={(e)=>{
        setinputn(e.target.value)
      }} />
      <pre>{JSON.stringify(userdata, null, 2)}</pre>
      {

        <div key={userdata.id}>
          {
            userdata.map(user => (
              Object.entries(userdata).map(([key, value]) => (
                <p key={key}>
                  {key}:{typeof value === "object" ? JSON.stringify(value) : value}
                </p>
              ))
            ))

          }
        </div>
      }

    </div>
  )
}
