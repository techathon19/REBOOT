var express = require('express');
var connection = require('../connection');
var router = express.Router();


router.post('/registeruser', (req, res) => {         //Route for registering a user
    // console.log(req.body);
    var uname = req.body.name;                   //The request body contains details of the user using bodyparser
    var  email = req.body.email;
    var pass = req.body.password;
    var ph = req.body.contact;
    // console.log("YU")
    // var userdata = JSON.parse(req.cookies.userdata);    //User data cookie is used to fetch oid for a factory
    var values = [uname,email,pass,ph];
    connection.query('INSERT INTO login (name,email,pass,phone) VALUES ?', [[values]], (err, response) => {  //Query to push into db
        if (err) {
            console.log(err.sqlMessage);
            res.send(err.sqlMessage);   //If err send err
        } else {
            res.send('Successfully Registered');      //Would be displayed as an alert.
        }
    });
});

router.post('/validateuser', (req, res) => {         //Route for registering a factory
    // console.log(req.body);
    var uname = req.body.email;                   //The request body contains details of the factory
    var pass = req.body.password;
    // var userdata = JSON.parse(req.cookies.userdata);    //User data cookie is used to fetch oid for a factory
    connection.query('SELECT * FROM login WHERE email = ?', [uname], (err, response) => {  //Query to push into db
        if (err) {
            console.log(err.sqlMessage);
            res.send(err.sqlMessage);   //If err send err
        } else {
            if(response.length != 0)
            {
            if(response[0].pass==pass)
            {
                jsondata=JSON.stringify(response);
               // res.cookie('userdata', jsondata); 
                res.send("Success") 
            }   
            else
            {
                res.send("Invalid Password")                                    //Would be displayed as an alert.
            } 
        }    
            else
            {
                res.send("Invalid Username")                                    //Would be displayed as an alert.
            } 
        }
    });
});

module.exports=router;