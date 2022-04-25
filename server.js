const express = require("express");
const app = express();
const mongoose= require("mongoose");
port = 5000;

const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());

const houseRoute = require("./routes/houses")

mongoose
         .connect(process.env.MONGO_URL)
         .then(()=>console.log("DB up and running"))
         .catch((err)=>{
           console.log(err)
         });

app.use("/api/v1/house",houseRoute);
app.listen({port},()=>{
  console.log("The server is on")
});
