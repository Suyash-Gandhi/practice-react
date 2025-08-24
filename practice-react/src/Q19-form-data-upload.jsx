import React, { useState, } from 'react'

function Q19formdataupload() {
    //value={formData.age} tells React:
    // “The value of this input field should always be whatever
    //  is in formData.age.”
    const [formdata, setformdata] = useState({
        name: "",
        email: "",
        surname: "",
        age:0
    })

    const handlesubmit = (e) => {
        e.preventDefault()
        console.log(formdata);
    }


    const handlechange = (e) => {

        const { name, value } = e.target
        setformdata((prevdata) => ({ ...prevdata, [name]: value }))


    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input type="text" name="name" placeholder='name' value={formdata.name} onChange={handlechange} />
                <input type="text" name="email" placeholder='email' value={formdata.email} onChange={handlechange} />
                <input type="text" name="surname" placeholder='surname' value={formdata.surname} onChange={handlechange} />
                <input type="number" name="age" placeholder='age' value={formdata.age} onChange={handlechange} />
                <button type='submit'>submit</button>
            </form>

            <ul>
                {Object.entries(formdata).map(([key, value]) => (<li key={key}> {key}:{value}</li>))}
            </ul>

Submited data in consol
        </div>
    )
}

export default Q19formdataupload