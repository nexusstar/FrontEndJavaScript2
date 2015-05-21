
var WeatherCtrl = (function(){
	
	var apiParams = {
	 "key": "d161cfcbf80800d2d76844bd9aa78",
	 "format": "json",
	 "q": "42.7000,23.3333",
	 "num_of_days": 3
	}
	
	var testUrl = "http://api.worldweatheronline.com/free/v2/weather.ashx?key=d161cfcbf80800d2d76844bd9aa78&q=42.7000,23.3333&num_of_days=2&tp=3&format=json";
	
	var apiResource = new Resource(testUrl);
	
	var showWidget = function(){
		return apiResource.query().then(function(result){
			
			var container = $("#sidebar");
			var tplName = "/views/weather-widget.jade";
			var data = {
				current: result.data.current_condition[0],
				forecast: result.data.weather,
			};

			return helpers.displayWithJade(container, tplName, data);	
		})
	}
	
	var init = function(){

		return showWidget();

	}
	
	return{
		show: showWidget,
		init: init
	}
	
}());