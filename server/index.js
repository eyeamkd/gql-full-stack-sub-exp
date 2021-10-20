const express = require("express"); 


const app = express(); 


app.get('/',(req,res)=>{
    res.send("Server running").status(200); 
}) 

app.listen(4000,()=>{
    console.log("Server listening at 4000")
})