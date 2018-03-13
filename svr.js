'use strict'

var express = require('express'),
    vis = require('vis'),
    app = express();

app.get('/', function(req,res){
  res.send("Hello")
});



app.listen(3000, function(){
  console.log("Listening on 3000")
})

//connect to server

//API routes
