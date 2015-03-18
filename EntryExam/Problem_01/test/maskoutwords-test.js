/**
 * Created by p.nikov on 18.2.2015 г..
 */
"use strict";

var maskOutWords = require('../maskoutwords').maskOutWords;

exports.maskOutWordsExample = function(test){
    test.equal("We love coding in ***!\nThis makes us really productive",
        maskOutWords(["PHP"], "We love coding in PHP!\nThis makes us really productive"));
    test.done();
};

exports.maskOutWordsExampleTwo = function(test){
    test.equal("*********, I took my *** for a ****.\n It was crazy! My *** wanted only ****.",
        maskOutWords(["yesterday", "Dog", "food", "walk"],
                      "Yesterday, I took my dog for a walk.\n It was crazy! My dog wanted only food."));
    test.done();
};

exports.maskOutWordsExampleSpecial = function(test){
    test.equal("Some ***** text ***",
        maskOutWords(["^$?", "other", "food", "walk"],
            "Some other text ^$?"));
    test.done();
};

exports.maskOutWordsExampleEscape = function(test){
    test.equal("Some ***** text \n*** \n*** *****",
        maskOutWords(["\nnew", "other"],
            "Some other text \nNew \nNew other"));
    test.done();
};