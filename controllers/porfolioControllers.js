var express = require("express");
var router = express.Router();
//sending mail__________________________________________________________________//
const nodemailer = require('nodemailer');
//____________________________________________________________________sending mail//

//All routes.
router.get("/", function(req, res) {
    res.render("aboutMe");
});
router.get("/Projects", function(req, res) {
    res.render("Projects");
});
router.get("/Hobbies", function(req, res) {
    res.render("Hobbies");
});
router.get("/Contact", function(req, res) {
    res.render("Contact");
});

router.get("/resume", function(req, res){
    var file = './public/MaryGeorge.docx';
    res.download(file); // Set disposition and send it.
});




router.post("/sendmail", function(req, res) {
  console.log(req.body);
  // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    nodemailer.createTestAccount((err, account) => {

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: "contactmarygeorge@gmail.com",
                pass: "mareah8!"
            },
            
        });
var txt="Email: "+req.body.email+"<br>";
txt=txt+req.body.message;
        // setup email data with unicode symbols
    let mailOptions = {
        from: req.body.email, // sender address
        to: 'reahgeorge@yahoo.com', // list of receivers
        subject: 'Requested information - '+ req.body.name, // Subject line
        text: req.body.message, // plain text body
        html: txt // html body
    };
    console.log(mailOptions);
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        else{
        console.log('Message sent: %s', info.messageId);
        res.json(true);
        }
    });
    });
});


module.exports=router;