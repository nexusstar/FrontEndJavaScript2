"use strict";

var StudentModel = (function(){
	var students = [];
	
	var getStudents = function(){
		return students;
	}
	
	return{
		getStudents: getStudents,
		setStudent: setStudent,
		create: create,
		read: read,
		update: update,
		remove: remove,
	}
})();