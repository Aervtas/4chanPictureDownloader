var http = require('http').Server(app);
var io = require('socket.io')(http);
var express = require('express');
var app = express();


//home
app.get('/', function(req, res){
  res.send("Hello, world");
});

//localhost:3000, will be changed when hosted on Heroku
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
