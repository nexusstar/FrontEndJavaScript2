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
    console.log('Listening on port %d', server.address().port);
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
app.get('/students', function(req, res){
    res.jsonp(students);
});

// post new student to the collection
app.post('/students', function(req, res){
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
// get info about user by id
// for eg: /users/john-doe
app.get('/students/:id', function(req, res){
    // get the id from the params
    var id = req.params.id;

    if(studentExist(students, 'id', id)){
        res.jsonp(students[getStudentIndex(students, 'id', id)]);
    } else {
        var err = 'ERROR: cannot find student with id: ' + id;
        res.jsonp(err);
    }
});

// put an updated version of a user by id :TODO not implemented
app.put('/students/:id', function(req, res){
    // get the id from the params
    var id = req.params.id;

    if(studentExist(id)){

    }
    // update the info from the body if passed or use the existing one
    users[id].name = req.body.name || users[id].name;
    users[id].email = req.body.email || users[id].email;

    res.jsonp({
        msg: 'user data updated',
        data: users[id]
    });
});

// delete an existing user by id
app.delete('/students/:id', function(req, res){
    var id = req.params.id;

    if(studentExist(students, 'id', id)){
        delete(students[getStudentIndex(students, 'id', id )]);
        res.jsonp('student '+id+' successfully deleted!' + getStudentIndex(students, 'id', id ));
    } else {
        res.jsonp('student '+id+' does not exist!');
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