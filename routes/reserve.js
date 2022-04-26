const router = require("express").Router();
const reserve = require("../models/reserve");

// ensures a user books a selected house.
router.post("/:id",async(req,res)=>{
  const reservedHouse= new reserve(req.body);

  try{
    const savedReserve = await reservedHouse.save();
    res.status(200).json(savedReserve);

  }catch(err){
    res.status(500).json(err);
  }
})

// displays all houses  that the user has ever booked 

router.get("/:username",async(req,res)=>{
  try{
    const userBookedHouses = await reserve.find({username:req.body.username})
    res.status(200).json(userBookedHouses);
  }catch(err){
    res.status(500).json(err);
  }
})

module.exports = router;