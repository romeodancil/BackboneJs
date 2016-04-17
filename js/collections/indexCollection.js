define([
	'underscore',
	'backbone',
	'models/indexModel'
], function(_, Backbone, indexModel){

	var ProjectCollection = Backbone.Collection.extend({
		model : indexModel,
		url: "data/data.json",
		parse: function (data) {
			return data.employees
		}

	});

	return ProjectCollection;
	
})