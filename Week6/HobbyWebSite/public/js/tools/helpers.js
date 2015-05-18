var helpers = function(){

	var displayWithJade = function(container, fileName, data){

		// get the file with jquery
		return Q($.get(fileName)).then(function(jadeCode){

			// render jade to html	
			var renderedHtml = jade.render(jadeCode, data);

			// append the html to the container
			container.html(renderedHtml);
		})

	}

	return {
		displayWithJade: displayWithJade
	}

}()