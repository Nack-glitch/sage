import { useState } from "react"
function UseState(){
    const [counter,setcounter] =useState(0)
    return <>
    <button onClick={()=>setcounter(counter-1)} >-</button>
    <p>{counter}</p>
    <button onClick={()=>setcounter(counter+1)} >+</button>
    </>
}
export default UseState