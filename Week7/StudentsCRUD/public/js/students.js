/**
 * Created by petar on 4/29/15.
 */

	'use strict';
	
	var container = $("#tblData tbody");
	
	$("#load").click(function(){
        $.get("/api/students", function(result){
			if(result){
				result.forEach(function(el){
					container.append(
						'<tr>'+
						'<td>' + el.id + '</td>' +
						'<td>' + el.name + '</td>' +
						'<td>' + el.email + '</td>' +
						'<td>' + el.classes + '</td>' +
						'<td>' + el.gitRepo + '</td>' +
						'<td><button class="btn btn-sm edit" id="'+ el.id + '">edit</button></td>' +
						'<td><button class="btn btn-sm btn-danger dell" id="'+ el.id + '">X</button></td>' +
						'</tr>'
					);
				});
			}			
		});
    });
	
	$("#addStudent").submit(function(){
		var data = {
	        id: $("#userID").val(),
	        name: $("#userName").val(),
	        email: $("#userEmail").val(),
	        classes: $("#userClasses").val(),
	        gitRepo: $("#gitRepo").val()
	    }
		
		$.ajax({
		  type: "POST",
		  url: "/api/students",
		  data: data,
		  success: function(){console.log(data);},
		  dataType: "jsonp"
		});
	})
	
	
	
    container.on("click", "button.dell", function(){
		var studentIdRow = $(this).closest("tr");
	});