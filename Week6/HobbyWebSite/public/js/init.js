//document ready
$(function(){
<<<<<<< HEAD
	Router.addRoute({
		url: "api/articles",
		callback: BlogCtrl.init
	});
=======
	var articles = new Resource("/api/articles");
	
	articles.query().then(function(result){
		var container = $("#blog-posts");
		var list = result.list;
		var template = "/views/blog-items.jade";
		console.log(list);
		helpers.displayWithJade(container,template, {
			articles: list
		});
		
	})
	
	
>>>>>>> 7e1f47da5c0c92fcaa08417a77ffb0e3ab10e198
});