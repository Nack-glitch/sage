const express=require("express")
const app=express()
app.set("view engine","ejs")
app.listen(1000,()=>{
    console.log("it works")
})

app.use(express.static("style"))

app.get("/",(req,res)=>{
    res.render("home",{name:"jossy-T",loged:false})
});