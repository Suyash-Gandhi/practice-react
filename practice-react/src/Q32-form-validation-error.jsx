import React from 'react'
import { useState } from 'react'

function Q32formvalidationerror() {
    const [form, setform] = useState({ name: "", email: "" })
    const [error, seterror] = useState({})
    const [msg, setmsg] = useState("")

    const handle = (e) => {
        const { name, value } = e.target
        setform({ ...form, [name]: value })
        seterror({ ...error, [name]: "" })
    }

    const validate = () => {
        const newerror = {}
        if (!form.name.trim()) {
            newerror.name = "name is required"
        }

        if (!form.email.trim()) {
            newerror.email = "email is required"
        }

        return newerror

    }

    const submit = (e) => {
        e.preventDefault()

        const validateerrors = validate()

        if (Object.keys(validateerrors).length > 0) {
            seterror(validateerrors)
            setmsg("")
        } else {
            setform({ name: "", email: "" })
            setmsg("form submited successfully")
            
        }
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" name='name' value={form.name} 
                onChange={handle} placeholder='enter name' />
                {
                    error.name && <p>{error.name}</p>
                }

                <input type="email" name='email' value={form.email} 
                onChange={handle} placeholder='enter email' />
                {
                    error.email && <p>{error.email}</p>
                }
                <button type='submit'> submit</button>
            </form>
 {msg && <p >{msg}</p>}
        </div>
    )
    /*

The name attribute is required when using a generic handle function
If you're using a handler like this:

const handle = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value })
}
Then e.target.name is essential — it's how React knows which 
field to update.

Without name, e.target.name will be undefined, so it won't 
update the form correctly.

Without name, this happens:

[e.target.name] => [undefined]  // => sets form["undefined"] = value
This breaks your form logic, especially if you’re managing 
multiple fields like name, email, etc.
-------------------------------------------------------------------------------

What is a Generic Function (in React form context)?
A generic function is a reusable function that works for multiple inputs instead of writing separate handlers for each one.

🧠 In React forms, a generic input handler is typically used like this:
Example:

const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value })
}
This is a generic function because:

It doesn't care if you're editing "name", "email", "password", etc.

It uses the name attribute of the input field to decide which key to update in state.

🆚 Without Generic Function (Manual Approach):

const handleNameChange = (e) => {
  setForm({ ...form, name: e.target.value })
}

const handleEmailChange = (e) => {
  setForm({ ...form, email: e.target.value })
}
You write a separate function for each field.

Not scalable when you have many inputs.
-----------------------------------------------------------------

{error.email && <p>{error.email}</p>}
🔍 What it means:
This is a conditional render using short-circuit logic.

If error.email is truthy (i.e., it exists and is not "" 
or undefined), then <p>{error.email}</p> will be rendered.

If error.email is falsy (empty string, null, or undefined),
 nothing is rendered at all — not even an empty <p> tag.
    */
}

export default Q32formvalidationerror