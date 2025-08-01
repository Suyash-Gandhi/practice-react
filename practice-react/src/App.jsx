// providers(parent)

import {  useState } from "react"
import Q40contextapi from "./Q40-context-api"
import Q41contextapilogin from "./Q41-context-api-login"
import {data}  from "./child"
import { creditials } from "./child"

function App() {
  const [theme, settheme] = useState("light")
  const [islogin,setislogin]=useState(false)

 

  return (
<>
    <data.Provider value={{ theme, settheme }}>
      <Q40contextapi />
    </data.Provider>


    <creditials.Provider value={{islogin,setislogin}}>
<Q41contextapilogin/>
    </creditials.Provider>
</>
  )
}
export default App