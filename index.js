const express = require("express");
const app = express();
const env = require("dotenv");
env.config();
const PORT = process.env.PORT || 3000;

app.get("/" , (req , res) =>{
    res.send("Hello World");
});


app.listen(PORT , ()=>{ 
    console.log("Server is running on port 3000" );
});

// env variable
 
