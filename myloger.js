/**
 * Created by p.nikov on 18.2.2015 г..
 */
/*
 The interface
 Make an interface, called MyLogger with only 1 method - log(level, message)
 The two arguments should be:
 level - an integer, from 1 to 3.
 1 means that your are logging with INFO level.
 2 means that you are logging with WARNING level.
 3 means that you are logging with PLSCHECKFFS level.
 message is a string, that you are logging.
 There is a rule of how to make the log message, regardless where you are saving it:
 {LOG_LEVEL_STRING}::{TIMESTAMP}::{MESSAGE}
 For example, if we log with level = 1, and message = "Hello World", this will produce the following line:
 INFO::2015-02-02T01:43:19+00:00::Hello World
 The timestamp should be in ISO 8901 format.
 Make 3 different classes, that implement the interface MyLogger:
 */
"use strict";

//Polyfill from MDN
if (!Date.prototype.toISOString) {
    (function() {

        function pad(number) {
            if (number < 10) {
                return '0' + number;
            }
            return number;
        }

        Date.prototype.toISOString = function() {
            return this.getUTCFullYear() +
                '-' + pad(this.getUTCMonth() + 1) +
                '-' + pad(this.getUTCDate()) +
                'T' + pad(this.getUTCHours()) +
                ':' + pad(this.getUTCMinutes()) +
                ':' + pad(this.getUTCSeconds()) +
                '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
                'Z';
        };

    }());
}

function MyLogger(){
    var _timeStamp = new Date;
    _timeStamp = _timeStamp.toISOString();
    var _log_levels = {
        1 : 'INFO',
        2 : 'WARNING',
        3 : 'PLSCHECKFFS'
    };
    this.log = function(level, message){
        return _log_levels[level] + '::' + _timeStamp + '::' + message;
    }
}

function ConsoleLogger(){

}
ConsoleLogger.prototype = Object.create(MyLogger);
ConsoleLogger.prototype.constructor = ConsoleLogger;

