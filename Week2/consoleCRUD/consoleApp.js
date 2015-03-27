/**
 * Use npm package prompt to create console CRUD app
 * */

"use strict";

var prompt = require('prompt'),
    chalk = require ('chalk'),
    list = require("./list.json");

function promptMenu(){
    console.log('Available commands: -- list, add, get, remove, update ---');
    prompt.get(['command'], function (err, result) {

        switch(result['command']) {
            case 'list':
                getList();
                break;
            case 'add':
                promptAddItem();
                break;
            case 'get':
                promptGetItem();
                break;
            case 'remove':
                promptRemoveItem();
                break;
            case 'update':
                promptUpdateItem();
                break;
            default:
                console.log(result);
        }

    });
}

function getList(){
    console.log('ID :: NAME :: EMAIL');

    list.forEach(function(el){
        console.log( el["id"] + ' :: ' + el["NAME"] + ' :: ' + el["E-MAIL"]);
    });

    promptMenu();
}

function promptAddItem(){

    var schema = {
        properties: {
            name: {
                pattern: /^[a-zA-Z\s-]+$/,
                message: chalk.red.bgWhite.bold('Name must be only letters, spaces, or dashes'),
                required: true
            },
            email: {
                name: 'email',
                format: 'email',
                message: chalk.red.bgWhite.bold('Must be a valid email address')
            }
        }
    };

    prompt.get(schema, function (err, result) {

        var _lastID = list[list.length -1]['id'];
        var _nextID = parseInt(_lastID, 10);
        _nextID += 1;

        list.push ({
            "id": _nextID,
            "NAME": result['name'],
            "E-MAIL": result['email']
        });

        promptMenu();

    });
}

function promptGetItem(){

    prompt.get(['enterID'], function(err, result){

        var _searchID = result['enterID'];
        var _foundID = false;

        for(var i = 0, l = list.length; i < l; i++){

            var _currID = list[i]['id'];

            if(_searchID == _currID){  //_searchID is string
                console.log( list[i]["id"] + ' :: ' + list[i]["NAME"] + ' :: ' + list[i]["E-MAIL"] );
                _foundID = true;
                break;
            }

        }

        if(!_foundID){
            console.log('There is no entry with ID: ' + _searchID);
        }

        promptMenu();
    });
}

function promptRemoveItem(){
    prompt.get(['enterID'], function(err, result){

        var _searchID = result['enterID'];
        var _foundID = false;

        for(var i = 0, l = list.length; i < l; i++){

            var _currID = list[i]['id'];

            if(_searchID == _currID){  //_searchID is string
                list.splice(i, 1);

                _foundID = true;
                break;
            }

        }

        if(!_foundID){
            console.log('There is no entry with ID: ' + _searchID);
        }
        promptMenu();
    });
}

function promptUpdateItem(){

    prompt.get(['enterID', 'enter Name', 'enter e-mail'], function(err, result, clb){

        var _searchID = result['enterID'];
        var _foundID = false;

        for(var i = 0, l = list.length; i < l; i++){

            var _currID = list[i]['id'];

            if(_searchID == _currID){  //_searchID is string
                list[i]['NAME'] = result['enter Name'];
                list[i]['E-MAIL'] = result['enter e-mail'];
                _foundID = true;
                break;
            }

        }

        if(!_foundID){
            console.log('There is no entry with ID: ' + _searchID);
        }

        promptMenu();
    });
}


//init app
promptMenu();
prompt.start();