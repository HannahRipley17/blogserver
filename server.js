const express = require("express");
const cors = require("cors");

var server = express();
var port= process.env.PORT || 3000;

//Data
var data = require( "./data.js");

//Middleware
server.use(express.urlencoded( {
	extended: false
} ));
server.use(cors());
server.use (express.json());


//REST endpoints

server.get("/names", function (req, res) {
	console.log(data);
	var response = { names: data.names };
	
	res.json(response);
});

server.post("/names", function (req, res) {
	if (!req.body.name ) {
		res.status(400);
		var response = { msg: "please submit a name"};
		res.json(response);

	} else if (req.body.name == "" || req.body.name == "Addison") {
		res.status(400);
		var response = { msg: "please enter a real name"};
		res.json(response);
	} else {
		data.names.push (req.body.name);
		res.status(201);
		res.send();
	}
});



server.get("/numbers", function (req,res) {
	var response = { numbers: data.numbers };
	res.json(response);
});
server.post("/numbers", function(req,res) {
	data.numbers.push(req.body.number);
	res.status(201);
	res.send();
});



server.listen(port, function() {
	console.log(`Listening on port ${port}`)
});