import {useinput} from './hooks'
function Q36customhooks() {

  const {data,handle,reset}=useinput({
    name:"",
    email:""
  })

  const subimt=(e)=>{
    e.preventDefault()
    console.log(data);
    
    reset()
  }
  return (
    <div>
<form onSubmit={subimt}>

  <input type="text" name="name" value={data.name}
  onChange={handle} placeholder='enter name' />

    <input type="text" name="email" value={data.email}
  onChange={handle} placeholder='enter email' />

  <button type='submit'>submit</button>
</form>
    </div>
  )
}

export default Q36customhooks