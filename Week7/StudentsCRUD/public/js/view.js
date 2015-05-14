"use strict";

var StudentsView = (function(){
	var updateStudents = function(students){
		var studentList = $("#student-list tbody");
		
		//clear content
		studentList.empty();
		
		studentList.forEach(function(student){
				var _id = student.id;
			    var _name = student.name;
			    var _email = student.email;
			    var _classes = student.classes;
			    var _gitRepo = student.gitRepo;
				var _student = student;
				
				var trStudent = $("<tr></tr>");
				
				
		})
	
	}
	
	return {
		update: updateStudents
	}
})