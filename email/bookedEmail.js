const  nodemailer = require("nodemailer");

const sendBookedEmail =(Email,hostLocation,houseTitle,username)=>{
  let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
      user: "muriukijames33@gmail.com",
      pass:"xvnuqrtdghprspap"
    }
  })
  
  let mailOptions = {
    from:"muriukijames33@gmail.com",
    to:`${Email}`,
    subject:"Booked",
    // text:"A sample email to indicate that the code is working"
    html: `<html>
    <body>Hello ${username} ,<br></br> You have successfully booked a 
    ${houseTitle}  in  ${hostLocation} .<br></br>Regards <strong>
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
  
  })

}
module.exports =sendBookedEmail
