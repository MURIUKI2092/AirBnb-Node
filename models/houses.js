const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");


const HouseSchema = new mongoose.Schema({
  username:
  {type:String,
    },
  Email:
  {type:String
   },
  Telephone:{
    type:String,
   
    default:" "},
  HostLocation:
  {type:String
   },
  price:
  {type:Number
  },
  Description:
  {type:String,
 },
  image:
  {type:String,
   
  default:""}
},{timestamps:true}
);

module.exports = mongoose.model("House",HouseSchema);