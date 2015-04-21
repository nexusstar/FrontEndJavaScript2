/**
 * Created by nexusstar on 17.04.15.
 */

'use strict';

$(document).ready(function(){

    $('#add').click(function(e){
        var $textInput = $(".inputBox");
        TodoApp.createTask( $textInput.val() );
        TodoApp.displayList();
    });

    $('#display').click(function(e){
        TodoApp.displayList('ul');
    });

});
