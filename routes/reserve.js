const router = require("express").Router();
const reserve = require("../models/reserve");
const  nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config()


// ensures a user books a selected house.
router.post("/:id",async(req,res)=>{
  const reservedHouse= new reserve(req.body);

  try{
    const savedReserve = await reservedHouse.save();
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
      subject:"Booked",
      // text:"A sample email to indicate that the code is working"
      html: `<html>
      <body>Hello ${req.body.username} ,<br></br> You have successfully booked a 
      ${req.body.houseTitle}  house in  ${req.body.hostLocation} .<br></br>Regards <strong>
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
    res.status(200).json(savedReserve);

  }catch(err){
    res.status(500).json(err);
  }
})

// displays all houses  that the user has ever booked 

router.get("/:username",async(req,res)=>{
  try{
    const userBookedHouses = await reserve.find({username:req.body.username,})
   
    res.status(200).json(userBookedHouses);
  }catch(err){
    res.status(500).json(err);
  }
})

module.exports = router;