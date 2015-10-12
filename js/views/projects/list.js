define([

	'jquery',
	'underscore',
	'backbone',
	'collections/projects',
	'text!templates/projects/list.html'

], function($, _, Backbone, ProjectsCollection, projectListTemplate){

		var ProjectListView = Backbone.View.extend({
			el: $('#container'),

			render: function(){
				
				this.collection = new ProjectsCollection();

				parseData = this.collection.toJSON();

				console.log(this.collection.toJSON());
				
				var compiledTemplate = _.template( projectListTemplate, parseData);
				$('#container').html( compiledTemplate );

			}
		});

		return ProjectListView;
});