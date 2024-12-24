const express = require('express')
const app = express()


app.use(express.json());


app.get("/",(req,res)=>{
    res.send("Welcome to App")
})
app.get("/about",(req,res)=>{
    res.send("Welcome to About")
})
 

// POST route
app.post('/submit', (req, res) => {
    const data = req.body; // Extract data from the request body
    console.log(`Received data: ${data}`);
    
    // Send a response back to the client
    res.status(200).json({ message: 'Data received successfully', data: req.body });
});

app.listen(8080,()=>{
    console.log("App is listening on port 8080");
})

