var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3000;
var db = require("./models");
var nodemailer = require('nodemailer');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// static directory
app.use(express.static("public"));

// routes
require("./routes/html-routes.js")(app);
require("./routes/customer-api-routes.js")(app);
require("./routes/appointment-api-routes.js")(app);
require("./routes/employee-api-routes.js")(app);
require("./routes/nodemailer-route.js")(app);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});
