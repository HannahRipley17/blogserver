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

server.get("/posts", function (req,res) {
    var response = {posts : data.posts};
    res.json(response);
});
server.post("/posts", function (req, res) {
    var new_post = {
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        image: req.body.image,
        text: req.body.text,
        date: req.body.date
    };
    data.posts.unshift(new_post);
	res.status(201);
	res.send();
});


server.listen(port, function() {
	console.log(`Listening on port ${port}`)
});