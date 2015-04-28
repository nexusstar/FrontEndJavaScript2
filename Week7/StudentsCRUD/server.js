/**
 * Created by nexusstar on 15-4-28.
 */

// load the express module
var express = require('express');

// declare our app
var app = express();



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

// post new user to the collection
app.post('/students', function(req, res){
    // req.body contains the incoming fields and values
    var id = req.body.id;
    var name = req.body.name;
    var email = req.body.email;
    var classes = req.body.classes;
    var gitRepo = req.body.gitRepo;
    var studentExist = false;

    students.forEach(function(student){
        if(student.id == id){
            studentExist = true;
        }
    });



    res.jsonp({
        msg: 'user created',
        data: students[id]
    });
});


// document endpoints
// get info about user by id
// for eg: /users/john-doe
app.get('/users/:id', function(req, res){
    // get the id from the params
    var id = req.params.id;
    res.jsonp(users[id]);
});

// put an updated version of a user by id
app.get('/users/:id', function(req, res){
    // get the id from the params
    var id = req.params.id;
    // update the info from the body if passed or use the existing one
    users[id].name = req.body.name || users[id].name;
    users[id].email = req.body.email || users[id].email;

    res.jsonp({
        msg: 'user data updated',
        data: users[id]
    });
});

// delete an existing user by id
app.delete('/users/:id', function(req, res){
    var id = req.params.id;
    if(users[id]){
        delete(users[id])
        res.jsonp('user '+id+' successfully deleted!');
    } else {
        res.jsonp('user '+id+' does not exist!');
    }
});