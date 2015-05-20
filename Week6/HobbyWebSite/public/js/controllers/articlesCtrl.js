// crud

var BlogCtrl = (function(){

	var blogRes = new Resource("/api/articles");

	var list = function(){
		return blogRes.query().then(function(result){
			var container = $("#blog-posts");
			var tplName = "views/blog-items.jade";
			var data = {
				articles: result.list
			};

			return helpers.displayWithJade(container, tplName, data);	
		})
		
	}

	var reset = function(){
		$('#blogs-form').trigger("reset");
		$('#blogs-form').find("[name=_id]").val("");
	}

	var edit = function(id){
		
		blogRes.view(id).then(function(data){
			Object.keys(data).forEach(function(field){
				var formElement = $("[name="+field+"]");
				formElement.val(data[field]);
			})			
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

	var remove = function(id){
		blogRes.delete(id).then(function(){
			console.log("Deleted "+id+" successfuly!");
			list();
		})
	}

	var init = function(){

		$("#blog-posts").on("submit", "#blogs-form",function(event){
						
			var data = helpers.getDataFromForm($(this));
			save(data);
			
			$("#blogModal").Modal.dismiss();
			event.preventDefault();
			
		})
		
		$("#blog-posts").on("click", ".action-delete",function(event){
			var id = $(this).data("id");
			remove(id);	
		})
		
		$("#blog-posts").on("click", ".action-edit",function(event){
			var id = $(this).data("id");
			$("#blogModal").find("#blogModalLabel").text("Update Blog Content");
			$('#blogModal').find(":submit").text("Update");
			$("#blogModal").modal('show');
			edit(id);
		})

		return list();

	}

	return {
		list: list,
		reset: reset,
		edit: edit,
		save: save,
		remove: remove,
		init: init
	};

}());