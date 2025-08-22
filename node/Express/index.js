const express = require("express")

const app = express()

// app.get("/",(req,res)=>{
//     res.send("hello world")
// })

// app.get("/home",(req,res)=>{
//     req.send("Home")
// })
// app.listen(2020,()=>{
//     console.log("server from http://localhost:2020")
// })
app.use(express.json())

app.get("/users/:id",(req,res)=>{
    const user=req.params.id
    res.send("user id from params is: " + user)
})

app.get("/search",(req,res)=>{
    res.send("useer name: "+ req.query.userName +"<br/>" + "password: "+ req.query.password)
})

app.listen(2025,()=>{
    console.log("server started on  http://localhost:2025")
})