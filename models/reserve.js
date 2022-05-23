const mongoose = require("mongoose");

const ReserveSchema = new mongoose . Schema({

  houseTitle:{
    type:String,
    required:true,

  },
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
    hostLocation:
  {type:String,
    required:true
   },

},{timestamps:true});

module.exports = mongoose.model("reserve",ReserveSchema);