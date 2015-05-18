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
		});
		
	};
	
	var edit = function(id){
		blogRes.view(id).then(function(data){
			Object.keys(data).forEach(function(field){
				var formElement = $("[name="+field+"]");
				formElement.val(data[field]);
			})			
		})
	};
	
	var remove = function(id){
		blogRes.delete(id).then(function(){
			console.log("Deleted "+id+" successfuly!");
			list();
		})
	};
	
	var init = function(){
		
		$("#blog-posts").on("click", ".action-delete", function(){
			var id = $(this).data("id");
			remove(id);
		})
		
		return list();
	}
	
	return {
		list: list,
		remove: remove,
		init: init
	};

}());