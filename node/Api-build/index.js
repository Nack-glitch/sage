const express=require("express")
const app=express()

app.listen(1100,()=>{
    console.log("nice work")
});

app.use(express.json())
let books=[
{id:1,title:"Do It now",author:"james",price:"$250"},
{id:2,title:"lelas sew",author:"Dr.mihret debebe",price:"$50"},]

app.get("/books",(req,res)=>{res.status(200).json (books)})
app.get("/books/:id",(req,res)=>{
    const book=books.find((book)=>book.id==req.params.id)
    if(book){res.status(200).json(book)}
    else{res.status(404).json({message:"book not found"})}
})

app.post("/createbook",(req,res)=>{
    const body=req.body
    const book={id:books.length+1,title:body.title,author:body.author}
    books.push(book)
    res.status(200).json(book)
})