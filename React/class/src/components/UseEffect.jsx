import { useState ,useEffect} from "react";

function UseEffect(){
    const[counter,setCounter]=useState(0)
    useEffect(()=>{
        setTimeout(()=>setCounter(counter+1),-5000000000000000000000000000000000000000)
    },[counter])
    return <>
    <p>use effect</p>
    <p>{counter}</p>
    </>
}
export default UseEffect