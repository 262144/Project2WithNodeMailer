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



db.sequelize.sync({ force: true }).then(function() {
	app.listen(PORT, function() {
		console.log("App listening on PORT " + PORT);
	});
});



app.post("/sendIt/:email", function(req, res) {
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'Project2JNJspa@gmail.com',
			pass: 'JessiNickJames'
		}
	});

	var mailOptions = {
		from: 'Project2JNJspa@gmail.com',
		to: req.params.email,
		subject: 'Sending Email using Node.js',
		text: 'I guess this is how people hack into other people\'s email.  I am just using my command prompt to send the email.  Really quite interesting.'
	};

	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
});
    // End from Jessi
