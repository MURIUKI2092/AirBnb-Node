const mongoose = require("mongoose");

const HouseSchema = new mongoose.Schema({
  houseTitle:{
    type:String,
    required:true,

  },
  username:
  {type:String,
    required:true
    },
  Email:
  {type:String,
    required:true
   },
  Telephone:{
    type:String,
   
    default:" "},
  HostLocation:
  {type:String,
    required:true
   },
  price:
  {type:Number,
    required:true
  },
  Description:
  {type:String,
    required:true
 },
  image:
  {type:String,
    required:true,
   
  default:""}
},{timestamps:true}
);

module.exports = mongoose.model("House",HouseSchema);