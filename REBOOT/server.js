// *****************IMPORTING NECESSARY MODULES *********************************

var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

app.use(cookieParser());   // To use cookie

app.use(bodyParser.urlencoded({extended : true}));      //To use body-parse
app.use(bodyParser.json()); 

app.use(express.static(__dirname + '/Public/Pages/'));   //To run static pages

app.use('/signup', require('./Routes/signup'));  // To nrun route file

app.listen(1212);

console.log("Server Running");

