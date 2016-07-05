define([
	'underscore',
	'backbone'
], function(_, Backbone){

	var ProjectModel = Backbone.Model.extend({
		url: "data/data.json"
	});

	return ProjectModel;

});