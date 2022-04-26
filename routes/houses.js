const router = require("express").Router();

const house = require("../models/houses");

//adding a house to the database. Done by the host

router.post("/",async(req,res)=>{
  const newHouse = new house(req.body);
 
  try{
    const savedHouse = await newHouse.save();
    res.status(200).json(savedHouse);
  }catch(err){
    res.status(500).json(err)
  }
})


//get all houses

router.get("/",async(req,res)=>{
  try{
    const allHouses = await house.find()
    res.status(200).json(allHouses)
  }catch(err){
    res.status(500).json(err);

  }
});

// getting all houses which were posted in a given town
router.get("/:HostLocation",async(req,res)=>{
  try{
    const  locationHouse = await house.find({HostLocation:req.params.HostLocation})
    res.status(200).json(locationHouse)
  }catch(err){
    res.status(500).json(err);
  }
})

module.exports = router;