var db = require("../models");
module.exports = function(app) {

  app.get("/api/customers", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Appointment
    db.Customer.findAll({
      include: [db.Appointment]
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

  app.get("/api/email/:email", function(req, res) {
    db.Customer.findOne({
      where: {
        email: req.params.email
      }
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });


  app.get("/validate/:email", function(req, res) {
    db.Customer.findOne({
      where: {
        email: req.params.email
      }
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

  app.get("/api/customers/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Appointments
    db.Customer.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Appointment]
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

  app.post("/api/customers", function(req, res) {
    db.Customer.create(req.body).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });
};