/**
 * Created by nexusstar on 14.04.15.
 */

var express = require ('express'),
    app = express(),
    fs = require('fs');

app.set('view engine', 'jade');

app.use(express.static('public'));

app.get('/', function(req,res){
    res.render('index')
});

app.listen(3000, function(){
    console.log('Example app started');
});