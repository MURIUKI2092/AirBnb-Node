const mongoose = require("mongoose");

const ReserveSchema = new mongoose . Schema({


  username :
  {
    type:String
  },
  Email:{
    type: String,
    required:true
  },
  Telephone:{
    type:String,
   
    default:" "},

},{timestamps:true});

module.exports = mongoose.model("reserve",ReserveSchema);