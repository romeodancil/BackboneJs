define([

	'jquery',
	'underscore',
	'backbone',
	'collections/indexCollection',
	'text!templates/index/indexView.html'

], function(jQuery, _, Backbone, indexCollection, projectListTemplate){

		var ProjectListView = Backbone.View.extend({
			el: jQuery('#container'),
			
			render: function(){
				this.collection = new indexCollection();

				parseData = this.collection.toJSON();
				
				var compiledTemplate = _.template(projectListTemplate);
				this.$el.html( compiledTemplate );

			}
		});

		return ProjectListView;
});