
"use strict";

var queue = function() {

    var queue = [];

    return {
        // pushes the item to the queue
        "push": function(item) {
            queue.push(item);
        },

        //returns the item on top of the queue
        "pop": function(){
            var original = queue.slice(0);
            queue = queue.slice(0, queue.length - 1);
            return original[original.length - 1];
        },
        //returns true if the queue is empty
        "isEmpty": function(){
            return !queue.length;
        },

        "getItems": function(){
            return queue.toString();
        }
    };

};

var queueLiteral = {
    //this should be mutable and instance specific;
    "items" : [],

    //push item to items
    "push":  function(item) {
        this.items.push(item);
    },
    //returns the item on top of the queue
    "pop": function(){
        var original = this.items.slice(0);
        this.items = this.items.slice(0, queue.length - 1);
        return original[original.length - 1];
    },

    //returns true if the queue is empty
    "isEmpty": function(){
        return !this.items.length;
    },

    "getItems": function(){
        return this.items.toString();
    }
};




// make available for nodeunit testing
exports.queue = new queue();
exports.queueLiteral = Object.create(queueLiteral);

