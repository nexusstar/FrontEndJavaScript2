var BlogCtrl = (function(){

	var blogRes = new Resource("/api/article");

	var list = function(){
		return blogRes.query().then(function(result){
			var container = $("#articles");
			var tplName = "views/blog-items.jade";
			var data = {
				articles: result.list
			};
			console.log
			return helpers.displayWithJade(container, tplName, data);	
		})
		
	}
	
	var remove = function(id){
		blogRes.delete(id).then(function(){
			console.log("Deleted "+id+" successfuly!");
			list();
		})
	}

	
	var save = function(data){
	
	var id = data._id || "";
	delete(data._id);

	// if id update
	if(id !== ""){
		
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

		return remove(55592387b46f8b4935a9e761);
	}

	return {
		list: list,
		save: save,
		remove: remove,
		init: init
	};

}());