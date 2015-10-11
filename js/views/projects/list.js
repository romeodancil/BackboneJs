define([

	'jquery',
	'underscore',
	'backbone',
	'collections/projects',
	'text!templates/projects/list.html'

], function($, _, Backbone, ProjectsCollection, projectListTemplate){

		var ProjectListView = Backbone.View.extend({
			el: $('#container'),

			initialize: function(){
				this.collection = new ProjectsCollection();
				this.collection.add({ name: "Jen" });
				
				var compiledTemplate = _.template( projectListTemplate, { projects: this.collection.models } );
				this.$el.html( compiledTemplate );

			}
		});

		return ProjectListView;
});