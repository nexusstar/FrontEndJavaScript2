 "use strict";

//Express app
var express = require ('express'),
	app = express();
	
app.use(express.static('public'));
app.set('view engine', 'jade');

//rounte
app.get('/', function(req,res){
	res.render('index')
});

// listen for requests
var server = app.listen(3000, 'localhost');
server.on('listening', function() {
    console.log('Server listen on port %s at %s', server.address().port, server.address().address);
});