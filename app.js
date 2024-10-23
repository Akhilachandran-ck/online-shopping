const express=require("express");
require("dotenv").config();
var morgan=require("morgan");
const studentRoute=require('./routes/studentRoute');
require("./db/dbConnection");
const app=express();

app.use(morgan("dev"));


app.use("/api",studentRoute);




app.listen(3005, ()=>{
    console.log(`listening to  port ${process.env.port}`);

})