/**
 * Created by nexusstar on 15-4-28.
 */

// load the express module
var express = require('express');

// declare our app
var app = express();

//middleware
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

// configuration and middleware
app.use(express.static('public'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(methodOverride());


// routes
app.get('/', function (req, res) {
    res.render('index');
});

// listen for requests
var server = app.listen(1337, function() {
    console.log(app.settings);
    console.log('Listening on port %d:%s', server.address().port, app.settings.env);
});

// this will serve as our resource on the server
var students =[
    {
        id: 1,
        name: 'Student Name One',
        email: 'student.one@mail.com',
        classes: ['FrontEnd', 'Java', 'Python'],
        gitRepo: 'http://github.com/student'
    },
    {
        id: 2,
        name: 'Student Name One',
        email: 'student.one@mail.com',
        classes: ['FrontEnd', 'Java', 'Python'],
        gitRepo: 'http://github.com/student'
    },
    {
        id: 3,
        name: 'Student Name One',
        email: 'student.one@mail.com',
        classes: ['FrontEnd', 'Java', 'Python'],
        gitRepo: 'http://github.com/student'
    }
];

// collection endpoints
// get all users
app.get('/api/students', function(req, res){
    res.jsonp(students);
});

// post new student to the collection
app.post('/api/students', function(req, res){
    // req.body contains the incoming fields and values
    var _id = req.body.id;
    var _name = req.body.name;
    var _email = req.body.email;
    var _classes = req.body.classes;
    var _gitRepo = req.body.gitRepo;

    var student ={
        id: _id,
        name: _name,
        email: _email,
        classes: _classes,
        gitRepo: _gitRepo
    };

    res.jsonp({
        msg: 'user created',
        data: students.push(student)
    });
});


// document endpoints
app.get('/api/students/:id', function(req, res){
    // get the id from the params
    var id = req.params.id;

    if(studentExist(students, 'id', id)){
        res.jsonp(students[getStudentIndex(students, 'id', id)]);
    } else {
        var err = 'ERROR: cannot find student with id: ' + id;
        res.jsonp(err);
    }
});

// put an updated version of a user by id
app.put('/api/students/:id', function(req, res){
    // get the id from the params
    var id = req.params.id;

    if(studentExist(id)){
        var stIndex = studenIndex(students, 'id', id);

        // update the info from the body if passed or use the existing one
        students[stIndex].name  =  req.body.name || students[stIndex].name;
        students[stIndex].email  =  req.body.email || students[stIndex].email;
        students[stIndex].classes  =  req.body.classes || students[stIndex].classes;
        students[stIndex].gitRepo  =  req.body.gitRepo || students[stIndex].gitRepo;

        res.jsonp({
            msg: 'user data updated',
            data: students[stIndex]
        });

    }else {
        res.jsonp('student ' + id + ' does not exist!');
    }

});

// delete an existing user by id
app.delete('/api/students/:id', function(req, res){
    var id = req.params.id;

    if(studentExist(students, 'id', id)){
        delete(students[getStudentIndex(students, 'id', id )]);
        res.jsonp('student ' + id + ' successfully deleted!');
    } else {
        res.jsonp('student ' + id + ' does not exist!');
    }
});



var studentExist = function(array, attr, value){
    for(var i = 0; i< array.length; i++){
        if(array[i].hasOwnProperty(attr) && array[i][attr] === value){
            return true;
        }
    }
    return false;
};

var getStudentIndex = function(array, attr, value) {
    for(var i = 0; i < array.length; i++) {
        if(array[i].hasOwnProperty(attr) && array[i][attr] === value) {
            return i;
        }
    }
    return -1;
};

//$.get("students",function(result){console.log(result)})

//$.ajax({url:"students",method:"post",data:{id:132,name:"pesho"}}).done(function(result){console.log(result)})