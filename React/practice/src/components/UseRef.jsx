import { useState , useRef, useEffect} from "react"

function UseRef(){
    const[counter,setcounter] =useState(0)
    const previousCounter= useRef(1)
useEffect(()=>{
    console.log("jossy")
})
   return(<>
    <h1>usestate {counter}</h1>
    <h1>useref {previousCounter.current}</h1>
    <button onClick={()=>{
         previousCounter.current=counter
         setcounter(counter+1)
         console.log("previousCounter:",previousCounter.current )
         console.log("counter",counter)
    }}
   
    >add </button>
    </>
   )
}
export default UseRef