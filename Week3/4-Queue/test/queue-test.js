/**
 * Created by nexusstar on 05.04.15.
 */

"use strict";

var queue = require('../queue').queue;


exports.checkEmpty = function(test){
    var q = Object.create(queue);
    test.ok(q.isEmpty(), "This should pass if queue is empty");
    test.done();
};

exports.checkGetItems = function(test){
    var q = Object.create(queue);
    test.equal(q.getItems(), '', 'This should return empty string as queue is empty');
    test.done();
};

exports.checkGetItemsWithPush = function(test){
    var q = Object.create(queue);
    q.push(10);
    var res = q.getItems();
    test.equal(res, 10, 'This should return one item from push ');
    test.done();
};

exports.checkPush = function(test){
    var q = Object.create(queue);
    var res = q.getItems();
    test.notEqual(res, 10, "This should not pass as it should be different object");
    test.done();
};