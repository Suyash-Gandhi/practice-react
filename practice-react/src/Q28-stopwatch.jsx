import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Q28stopwatch() {
  const [min, setmin] = useState('')
  const [sec, setsec] = useState(0)

  const [isactive, setisactive] = useState(false)


  const handlemin = (e) => {
    setmin(e.target.value)

    setisactive(false)
  }

  const start = () => {
    if (min > 0) {
      setsec(min * 60)
      setisactive(true)
    }

  }

  const stop = () => {
    setisactive(false)
  }

  useEffect(() => {
    let interval = null

    if(isactive&&sec>0){
      interval= setInterval(() => {
      setsec((prevsec) => prevsec - 1)
    }, 1000)
    }
   
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isactive])

  const displaymin = Math.floor(sec / 60)
  const displaysec = sec % 60

  return (
    <div>
      <input type="number" placeholder='enter time in min'
        value={min} onChange={handlemin} />
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      <h3> {displaymin}:{displaysec < 10 ? `0${displaysec}` : displaysec}</h3>
    </div>
  )
}

export default Q28stopwatch