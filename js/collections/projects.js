define([
	'underscore',
	'backbone',
	'models/projects'
], function(_, Backbone, ProjectsModel){

	var ProjectCollection = Backbone.Collection.extend({
		model : ProjectsModel
	});

	return ProjectCollection;
	
});