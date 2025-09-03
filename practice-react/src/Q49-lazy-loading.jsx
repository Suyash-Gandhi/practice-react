import {Suspense} from 'react'
import AutoSaveForm from "./Q48-auto-save"
import { useState } from 'react'
import { useEffect } from 'react'

function Q49lazyloading() {

const [show,setshow]=useState(false)

useEffect(()=>{
setTimeout(()=>setshow(true),3000)
},[])

  return (
    <div>
      <Suspense fallback={<div>loding</div>}>
      {show ? <AutoSaveForm /> : <div>Waiting 3 seconds...</div>}
      </Suspense>

    </div>
  )
}

export default Q49lazyloading