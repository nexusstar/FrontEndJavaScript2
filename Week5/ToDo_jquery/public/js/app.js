/**
 * Created by nexusstar on 14.04.15.
 */
"use strict";

function finishTask(){

    $(this).parent().toggleClass('done');
}

$(function() {

    $('#add').click(function(e){

        var $textInput = $(".inputBox");
        var $toDoList = $(".list ul");
        var $toDoItem = $('<li><input type="checkbox"> ' + $textInput.val() + '</li>');

        $toDoList.append( $toDoItem );

        $toDoItem.find(":checkbox").click(finishTask);

    });

});

