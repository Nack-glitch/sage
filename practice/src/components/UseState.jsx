import { useState } from "react"
function UseState(){
    const [counter,setcounter] =useState(0)
    return <>
    <button onClick={()=>setcounter(counter+1)} >Add</button>
    <p>{counter}</p>
    <button onClick={()=>setcounter(counter-1)} >Substract</button>
    </>
}
export default UseState