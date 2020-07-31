var express = require('express');
var router = express.Router();


//connecting with database
var mongoose = require("mongoose");
mongoose.connect("mongodb+srv://manish123:manish123@cluster0-o3prk.mongodb.net/FoodViraam?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology:true});

var connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function () {

     console.log('db connected...!');

     //dummy route for fetching all data
     router.get('/list', function(req, res, next) {
      connection.db.collection("collection01", function(err, collection){
        collection.find({}).toArray(function(err, data){
            res.json(data); // it will print your collection data
        })
    });
  });

});


module.exports = router;