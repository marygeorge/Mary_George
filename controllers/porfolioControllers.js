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




router.post("/sendmail", function(req, res) {
  console.log(req.body);
  // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    nodemailer.createTestAccount((err, account) => {

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: smtp.gmail.com,
            port: 465,
            auth: {
                user: "contactmarygeorge@gmail.com",
                pass: "mareah8"!
            },
            
        });

        // setup email data with unicode symbols
    let mailOptions = {
        from: req.body.email, // sender address
        to: 'reahgeorge@yahoo.com', // list of receivers
        subject: 'Hello from contact page✔'+req.body.name, // Subject line
        text: req.body.message, // plain text body
        html: req.body.message // html body
    };
    console.log(mailOptions);
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
    });
});


module.exports=router;