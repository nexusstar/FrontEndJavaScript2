//document ready
$(function(){
	Router.addRoute({
		url: "api/articles",
		callback: BlogCtrl.init
	});
});