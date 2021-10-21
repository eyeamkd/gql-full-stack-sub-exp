const express = require("express"); 


const app = express(); 


app.get('/',(req,res)=>{
    res.send("Server running").status(200); 
})  

//dummy comment to check git

app.listen(4000,()=>{
    console.log("Server listening at 4000")
})