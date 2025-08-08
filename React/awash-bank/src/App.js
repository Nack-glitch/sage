import { useState } from 'react';
import './App.css';

function App() {
 
  const [counter,setcounter] =useState(0)
    return (
  <>
  <div style={{display:"flex"}}>
    <h1>Awash counter app</h1>
    <div style={{displayColomun:"center"}}>
    <button  onClick={()=>setcounter(counter+1)} >add</button>
    <p>{counter}</p>
    <button onClick={()=>setcounter(counter-1)} >substract</button>
    </div>
      </div>
    </>
  
    )
}

export default App;
