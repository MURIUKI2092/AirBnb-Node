const router = require("express").Router();
const res = require("express/lib/response");
const house = require("../models/houses");

//adding a house to the database. Done by the host

router.post("/",async(req,res)=>{
  const newHouse = new house(req.body);
  console.log(req.body)

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

// getting all houses which were posted by an individual
router.get("/:username",async(req,res)=>{
  try{
    const  usernameHouse = await house.find({username:req.params.username})
    res.status(200).json(usernameHouse)
  }catch(err){
    res.status(500).json(err);
  }
})

module.exports = router;