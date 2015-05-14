/**
 * Created by petar on 4/29/15.
 */
var StudentApp = (function() {
		var Students = [];
		
	
		var init = function(){
		
			$.get('/api/students', function(result){
				console.log(result);
			});
		
		};
		
		return {
//			saveStudent: saveStudent,
//			removeStudent: removeStudent,
//			editStudent: editStudent,
			init:init
		};
})();