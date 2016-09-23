/***
 * Base Setup of Node-Rest-API
 ***/

//Call the packages that we need.
var express = require('express');
var app = express();
var bodyparser = require('body-parser');

//Configuring app to use bodyParser() so that we can get data from a POST request.
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Setting our api port
var port = process.env.PORT || 7000;
