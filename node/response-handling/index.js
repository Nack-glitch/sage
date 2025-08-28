const express= require("express")
const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello world from express !!")

});


app.get("/json",(req,res)=>{
    res.status(500).json({
        name:"yosef",
        age:20,
        address:{
            wereda:"lemikura",
            city:"A.A"
        }
    })
});
app.get("/youtube",(req,res)=>{
    res.redirect("https://youtube.com")

});

app.get("/youtube",(req,res)=>{
    res.redirect("https://telegram.org")

});



app.listen(4000,()=>{
    console.log("worked")
});
        
