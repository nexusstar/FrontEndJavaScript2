/**
 * Created by nexusstar on 20.03.15.
 */

var express = require ('express'),
    app = express(),
    fs = require('fs');

app.set('view engine', 'jade');

app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('index')
});

app.get("/:fileName", function(req, res, next){
    if(req.params && req.params.fileName && fs.existsSync(__dirname+"/views/"+req.params.fileName+".jade")){
        res.render(req.params.fileName);
    } else {
        next();
    }
});

app.listen(3000, function () {

    console.log('Example app listening on port 3000');

});