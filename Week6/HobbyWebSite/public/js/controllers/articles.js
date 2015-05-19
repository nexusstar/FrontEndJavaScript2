var BlogCtrl = (function(){

	var blogRes = new Resource("/api/article");
	
	var list = function(){
		return blogRes.query().then(function(result){
			console.log(result);
			var container = $("#blog-posts");
			var tplName = "views/blog-items.jade";
			var data = {
				articles: result.list
			};
			
			return helpers.displayWithJade(container, tplName, data);	
<<<<<<< HEAD
		});
		
	};
	
	var edit = function(id){
		blogRes.view(id).then(function(data){
			Object.keys(data).forEach(function(field){
				var formElement = $("[name="+field+"]");
				formElement.val(data[field]);
			})			
		})
=======
		});	
>>>>>>> 7e1f47da5c0c92fcaa08417a77ffb0e3ab10e198
	};
	
	var remove = function(id){
		blogRes.delete(id).then(function(){
			console.log("Deleted "+id+" successfuly!");
			list();
		})
	};
	
	var init = function(){
		
<<<<<<< HEAD
		$("#blog-posts").on("click", ".action-delete", function(){
			var id = $(this).data("id");
			remove(id);
		})
		
		return list();
	}
	
=======
		blogRes.update(id, data)
			.then(function(){
				console.log("Updated Successfuly!")
				list();
			})
	// else create
	} else {
		blogRes.create(data)
			.then(function(){
				console.log("Created Successfuly!")
				list();
			})
	}

}

var init = function(){
	
	$("#content").on("submit", "#mags-form",function(event){
			var data = helpers.getDataFromForm($(this));
			save(data);
			event.preventDefault();
		})
		

>>>>>>> 7e1f47da5c0c92fcaa08417a77ffb0e3ab10e198
	return {
		list: list,
		remove: remove,
		init: init
	};

}());