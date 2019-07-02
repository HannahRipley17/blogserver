const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

var server = express();
var port= process.env.PORT || 3000;

//Data
var postsModel = require("./schema.js");

//Middleware
server.use(express.urlencoded( {
	extended: false
} ));
server.use(cors());
server.use (express.json());


//REST endpoints

server.get("/posts", function (req,res) {
    postsModel.find().then(function(posts) {
        // var reversed_list = [];
        // posts.forEach(function(post))
        var response = { posts: posts};
        res.json(response);
    }).catch(function(error) {
        var response = { msg: error.message };
        res.status(400);
        res.json(response);
    }); //gotta do a .catch you just gotta and it'll usually look like this

    // var response = {posts : data.posts};
    // res.json(response);
});
    
server.post("/posts", function (req, res) {
     postsModel.create({
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        // skip the date field and use the default (the new Date)
        image: req.body.image,
        text: req.body.text
    }).then(function (new_post) {
        res.status(201);
        res.json(new_post);
    }).catch(function(error) {
        // if anything went wrong above, we catch the error here
        var response = { msg: error.message };
        res.status(400);
        res.json(response);
    });
});

//DELETE /posts/id
server.delete("/posts/:id", function(req,res) {
    postsModel.findByIdAndDelete(req.params.id).then(function() {
        res.status(204);
        res.send();
    }).catch(function(error) {
        var response = { msg: error.message };
        res.status(400);
        res.json(response);
    });
});

server.get("/posts/:id", function(req,res) {
    postsModel.findById(req.params.id).then(function(post) {
        if (post == null) {
            res.status(404);
            res.json({msg: `idk what you want`})
        } else {
            res.json({post:post})
        }
    }).catch(function(error) {
        res.status(400).json({msg: error.message});
    });
});

//update posts/id
server.put("/posts/:id", function(req,res) {
    postsModel.findById(req.params.id).then(function(post) {
        post.title = req.body.title;
        post.author = req.body.author;
        post.category = req.body.category;
        post.text = req.body.text;
        post.save().then(function() {
            res.status(200);
            res.json({post:post})
        });
    });
});


mongoose.connect("mongodb+srv://DataBaseUser:UserofDBs@mydatabase-rzgbu.mongodb.net/test?retryWrites=true&w=majority", { // test will specify which database it will connect to within the cluster
    useNewUrlParser: true
}).then(function() {
    server.listen(port, function() {
	    console.log(`Listening on port ${port}`)
    });
});
