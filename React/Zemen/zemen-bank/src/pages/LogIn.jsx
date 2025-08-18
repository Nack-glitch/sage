import { useState } from "react"

function LogIn(){
    const[UserName,setUserName]=useState("")
    return<>
    <form>
        <lable htmlFor="UserName">User name</lable>
        <input type="text" id="UserName" placeholder="Enter you name"
         onChange={(e)=>{
            // console.log(e.target.value)
            setUserName(e.target.value)
        }}
      
        />
    </form>
      <h1>User name: {UserName}</h1>
    </>
}
export default LogIn