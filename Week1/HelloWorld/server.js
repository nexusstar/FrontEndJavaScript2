

var express = require('express');
var http = require('http');

var app = express();

/*app.get('/', function (req, res){
    res.send('Hello world');
});*/
app.use(express.static('public'));

//reload code here
//reload(server, app);

var server = app.listen( 3000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log( "Example app liste at http://%s:%s", host, port);
});