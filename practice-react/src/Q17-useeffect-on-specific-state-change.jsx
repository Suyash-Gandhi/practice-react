import {useState,useEffect} from 'react'

function Q17useeffectonspecificstatechange() {
  const [count,setcount]=useState(0)
      const [text,settext]=useState("")

 useEffect(()=>{
    if(count==4){
settext("message for "+count+" state");
    }     
      },[count])

   
       
    return (
      <div>
          <button onClick={()=>setcount(count+1)}>click</button>
          {text}
      </div>
    )
  }


export default Q17useeffectonspecificstatechange