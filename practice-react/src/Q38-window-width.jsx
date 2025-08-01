import React from 'react'
import { usewidth } from './hooks'

function Q38windowwidth() {

    const width=usewidth()
  return (
    <div>width:{width}px</div>
  )
}

export default Q38windowwidth