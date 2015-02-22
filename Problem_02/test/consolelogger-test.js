/**
 * Created by Petar on 2/22/2015.
 */
"use strict";

var ConsoleLogger = require('../myloggers').ConsoleLogger;

exports.consoleLoggerLevel = function(test){
    var now = new Date;
    now = now.toISOString();
    test.equal("INFO::" + now + "::Message One",
        ConsoleLogger.log(1, 'Message One'));
    test.done();
};