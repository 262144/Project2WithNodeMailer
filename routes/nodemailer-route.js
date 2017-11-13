var db = require("../models");
var nodemailer = require('nodemailer'); 
module.exports = function(app) {

  app.post("/sendIt/:customerId", function(req, res) {
    db.Customer.findOne({
      where: {
        id: req.params.customerId,
      }
    }).then(function(dbCustomer) {
      db.Appointment.findAll({
        limit: 1,
        where: {},
        order: [
        ['createdAt', 'DESC']
        ]
      }).then(function(dbAppointment) {
        sendEmail(dbCustomer, dbAppointment[0].dataValues.appointmentTime);
        res.json("okay");
      });

    });

  });
  

};




function sendEmail(dbCustomer, appointmentTime) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'Project2JNJspa@gmail.com',
      pass: 'JessiNickJames'
    }
  });

  var mailOptions = {
    from: 'Project2JNJspa@gmail.com',
    to: dbCustomer.email,
    subject: 'Your JNJSpa Booking Information',
    text: "Hello, " + dbCustomer.firstName + " " + dbCustomer.lastName + ".  " +
    "Your appointment is scheduled for " + appointmentTime + ".  See you soon!"
  }

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}