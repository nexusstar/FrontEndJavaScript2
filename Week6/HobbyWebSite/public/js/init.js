//document ready
$(function(){
	
	Router.addRoute({
		url: "/api/articles",
		callback: BlogCtrl.init,
		default: true
	})
	
	Router.init();
	
	WeatherCtrl.init();
	
});