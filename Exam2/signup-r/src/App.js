import { useState } from "react";

export default function App(){
const[name,setName]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const handleSubmit=(e)=>{
 e.preventDefault();

 alert("Welcome " + name + "! " + "Signed up with " + email); 
};
return<>
<div>
  <h1>Sign up</h1>
  <form onSubmit={handleSubmit}>
  <input name="Name" type="text"
  placeholder="enter your name"  
  value={name}
  onChange={(e)=>setName(e.target.value)}
  />
  <input name="Email" type="text" 
  placeholder="enter your email"
  value={email}
  onChange={(e)=>setEmail(e.target.value)}
  />
  <input name="Password" type="text"
  placeholder="enter your password"
  value={password}
  onChange={(e)=>setPassword(e.target.value)}
  
  />
  <button typeof="submit">sign up</button>
  </form>
</div>
</>
}

