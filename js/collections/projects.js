define([
	'underscore',
	'backbone',
	'models/projects'
], function(_, Backbone, ProjectsModel){

	var ProjectCollection = Backbone.Collection.extend({
		model : ProjectsModel,

		initialize: function(){
			this.add({title: 'project1'});
			this.add({title: 'project2'});
		}

	});

	return ProjectCollection;
	
});