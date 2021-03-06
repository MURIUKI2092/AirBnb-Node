const express = require("express");
const app = express();
const mongoose= require("mongoose");
const bodyParser = require("body-parser")
port = 5000;
var cors = require('cors');
app.use(cors());
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());

const houseRoute = require("./routes/houses")
const reserveRoute = require("./routes/reserve")


mongoose
         .connect(process.env.MONGO_URL)
         .then(()=>console.log("DB up and running"))
         .catch((err)=>{
           console.log(err)
         });

app.use("/api/v1/house",houseRoute);
app.use("/api/v1/house/reserve", reserveRoute)
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

const server =app.listen({port},()=>{
  console.log("The server is on")
});
module.exports = server;
