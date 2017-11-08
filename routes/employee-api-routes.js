var db = require("../models");
module.exports = function(app) {
  
  app.get("/api/employees", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Appointment
    db.Employee.findAll({
      include: [db.Employee]
    }).then(function(dbEmployee) {
      res.json(dbEmployee);
    });
  });

    app.get("/api/last-name/:lastname", function(req, res) {
    db.Employee.findOne({
      where: {
        lastName: req.params.lastname
      }
    }).then(function(dbEmployee) {
      res.json(dbEmployee);
    });
  });

   app.get("/api/employees/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Appointments
    db.Employee.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Employee]
    }).then(function(dbEmployee) {
      res.json(dbEmployee);
    });
  });
   app.post("/api/employees", function(req, res) {
    db.Employee.create(req.body).then(function(dbEmployee) {
      res.json(dbEmployee);
    });
  });
};