const router = require("express").Router();
const  nodemailer = require("nodemailer");
const house = require("../models/houses");
const dotenv = require("dotenv");
dotenv.config()

//adding a house to the database. Done by the host

router.post("/host",async(req,res)=>{
  const newHouse = new house(req.body);
 
  try{
    const savedHouse = await newHouse.save();

    let transporter = nodemailer.createTransport({
      service:'gmail',
      auth:{
        user: process.env.myEmail,
        pass:process.env.myPass
      },
      tls:{
        rejectUnauthorized:false
      }
    });


    let mailOptions = {
      from:'" AirBnb Kenya"<process.env.myEmail>',
      to:req.body.Email.trim(),
      subject:"Hosted",
      // text:"A sample email to indicate that the code is working"
      html: `<html>
    <body>Hello ${req.body.username},<br></br> You have successfully hosted a 
    ${req.body.houseTitle} house  in ${req.body.HostLocation}  for <em>Ksh</em>  ${req.body.price} .<br></br>Regards <strong>
     AirBnb</strong>.</body>
     </html>`
       
    };
    transporter.sendMail(mailOptions,(err,success)=>{
      if(err){
        console.log(err)
      }
      else{
        console.log("Email is sent")
      }
    
    
  
  }
    )

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