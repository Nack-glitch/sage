import "./App.css"
import {useState} from "react"
import LoginAndLogout from "./components/conditions/LoginAndLogout"
import ReactList from "./components/ReactList"
import UseEffect from "./components/UseEffect"
function App(){
         const [counter,setCounter] =useState(0)
    return <div>


    <button onClick={()=>setCounter(counter+1)}>Add</button>
    <h1 style={{color: "red" , display:"inline-block" , background:"blue"}}>{counter}</h1>
    <button onClick={()=>setCounter(counter-1)}>Substract</button>

   <LoginAndLogout/>
   <ReactList/>
   <UseEffect/>
     </div> 
}
export default App