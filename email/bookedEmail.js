const  nodemailer = require("nodemailer");
const router = require("express").Router();

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
      user: "muriukijames33@gmail.com",
      pass:"xvnuqrtdghprspap"
    }
  })
router.post("/book",(req,res)=>{
    let mailOptions = {
      from:"muriukijames33@gmail.com",
      to:req.body.to,
      subject:"Booked",
      // text:"A sample email to indicate that the code is working"
      html: `<html>
      <body>Hello ${req.body.username} ,<br></br> You have successfully booked a 
      ${req.body.houseTitle}  in  ${req.body.hostLocation} .<br></br>Regards <strong>
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
    )}
)

  
module.exports =router;
