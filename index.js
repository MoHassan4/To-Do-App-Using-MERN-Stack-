const express = require("express");

const app = express();

app.set("viewport" , "ejs");

app.listen(3000,()=>{
    console.log("server running now")
})