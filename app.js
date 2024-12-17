const express = require('express')
const app = express()


app.get("/",(req,res)=>{
    res.send("Welcome to App")
})

app.listen(8080,()=>{
    console.log("App is listening");
})