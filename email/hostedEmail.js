const nodemailer= require("nodemailer");

const sendHostedEmail =  (hostEmail,hostName,hostLocation,houseTitle)=>{

  let transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
      user: "muriukijames33@gmail.com",
      pass:"xvnuqrtdghprspap"
    
    }
  });

  let mailOptions = {
    from :"muriukijames33@gmail.com",
    to:`${hostEmail}`,
    subject:"Hosted",
    //text:"a sample text message"
    html: `<html>
    <body>Hello ${hostName},<br></br> You have successfully hosted a 
    ${houseTitle}  in ${hostLocation} .<br></br>Regards <strong>
     AirBnb</strong>.</body>
     </html>`
  };

  transporter.sendMail(mailOptions,(err,success)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log("sent")
    }
  })

}

module.exports=sendHostedEmail