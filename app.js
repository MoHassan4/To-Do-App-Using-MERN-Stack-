const express = require("express");
const path = require("path");
const bodyParser = require("body-parser")
const connectMongodb = require("./init/mongodb");
const todoRoute = require("./routes/todo");
const app = express();
const dotenv = require("dotenv")

dotenv.config();
connectMongodb();

app.set("viewport" , "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({extended : true}));
app.use('/',todoRoute);

module.exports = app;
