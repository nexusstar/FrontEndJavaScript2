/**
 * Created by p.nikov on 18.2.2015 г..
 */
/*
 In a programming language of your choice, implement the following function/method:
 maskOutWords(words, text)
 If you read type declarations well, here it is:
 maskOutWords :: [String] -> String -> String
 Where:
 words is a list of words (strings)
 text is a string, that may contain newlines - \n
 The function should return a new text, where each matching word from words is replaced by the same number of characters *.
 */
"use strict";

function maskOutWords(words, text){
    var searchValue, newValue;
    var n = words.length;

    for(var i = 0; i < n; i++) {
        searchValue = new RegExp(escapeRegExp(words[i]),'gi');
        newValue = words[i].replace(/./g,'*');
        text = text.replace(searchValue, newValue);
    }

    return text
}

//see https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions
function escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}


// make available for nodeunit testing
exports.maskOutWords = maskOutWords;