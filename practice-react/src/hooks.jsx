import { useEffect } from "react";
import { useState } from "react";

export function useinput(initialvalue) {
    const [data, setdata] = useState(initialvalue)

    const handle = (e) => {
        const { name, value } = e.target
        setdata(prev => ({ ...prev, [name]: value }))
    }

    const reset = () => {
        setdata(initialvalue)
    }

    return { data, handle, reset }
}

export function usefetch(url) {
    const [user, setuser] = useState([])

    useEffect(() => {
        const getdata = async () => {
            try {

                const res = await fetch(url)
                const data = await res.json()
                setuser(data)
            } catch (err) {
                console.log(err);

            }

        }
        getdata()
    }, [url])
    return { user }
}


export function usewidth() {

    const [width, setwidth] = useState(window.innerWidth)

    useEffect(() => {
        const handle = () => {
            setwidth(window.innerWidth)

        }
        window.addEventListener("resize", handle)
        return () => window.removeEventListener("resize", handle)

    }, [])
    return width
}




export function usepress(){
    const [press,setpress]=useState("no key pressed")

    useEffect(()=>{
        const handle=(e)=>{
            setpress(e.key)
        }

        window.addEventListener("keypress",handle)

        return ()=>{
            window.removeEventListener("keypress",handle)
        }
    },[])

    return press
}