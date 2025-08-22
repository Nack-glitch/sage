const fs =require('fs');
fs.readFile("output.txt",'utf8',(err,data)=>{
    if(err) throw err
    console.log(data)
})

fs.writeFile("writeFileExample.csv","name,age,gender",(err)=>{
    if(err) throw err
    console.log ("completed").console
    
})
fs.writeFile("writeFileExam.csv","name,age,gender",(err)=>{
    if(err) throw err
    console.log ("completed")
})

