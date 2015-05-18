//document ready
$(function(){
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
	
	
});