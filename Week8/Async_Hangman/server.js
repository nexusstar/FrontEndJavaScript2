/**
 * Created by nexusstar on 15-4-28.
 */

// load the express module
var express = require('express');

// declare our app
var app = express();

// configuration and middleware
app.use(express.static('public'));



// listen for requests
var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});