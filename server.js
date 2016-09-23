/***
 * Base Setup of Node-Rest-API
 ***/

//Call the packages that we need.
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Accessing our schema model into serverjs
var Bear = require('./app/models/bear')

//Configuring app to use bodyParser() so that we can get data from a POST request.
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Setting our api port
var port = process.env.PORT || 7000;

//setting mongo db connection
mongoose.connect('mongodb://bearUser:bearpwd@localhost:27017/bears');

//Setting routes for our api
var router = express.Router();

router.use(function(req, res, next) {
    console.log('something is happening');
    next();
});

router.get('/', function(req, res) {
    res.json({
        message: 'Welcome to REST API Example'
    });
});

//create a new bear - accessed from http://localhost:7000/api/addbear
router.route('/addbear').post(function(req, res) {
    console.log('adding bear');
    //create new instance of bear;
    var bear = new Bear();
    bear.name = req.body.name;

    //check for errors and save.
    bear.save(function(err) {
        if (err) {
            res.send(err);
        }

        res.json({
            message: 'Bear Created'
        });
    });


})

// Register our routes with our APP.
app.use('/api', router);

//Start our awesome server
app.listen(port);
console.log('API Server running on ' + port);
('API Server running on ' + port);
