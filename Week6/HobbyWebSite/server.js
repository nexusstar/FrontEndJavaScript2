/**
 * Created by nexusstar on 14.04.15.
 */

 "use strict";

//Express app
var express = require ('express'),
	app = express();
	
var	fs = require('fs'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');

// Restify
var restify = require('iblokz-node-restify'),
	blogMap = require('./data/blogMap.json');

// Connect to db
var db = mongoose.connect("mongodb://localhost/wind");

// load model
restify.loadModel(blogMap, db);



app.use(express.static('public'));
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());


//rounte
app.get('/', function(req,res){
	res.render('index')
});

// init routes
restify.initRoutes(app,blogMap,{},db);

// listen for requests
var server = app.listen(3000, 'localhost');
server.on('listening', function() {
    console.log('Server listen on port %s at %s', server.address().port, server.address().address);
});