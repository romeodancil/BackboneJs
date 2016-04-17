define([

	'jquery',
	'underscore',
	'backbone',
	'collections/indexCollection',
	'text!templates/index/indexView.html'

], function(jQuery, _, Backbone, indexCollection, projectListTemplate){

		var ProjectListView = Backbone.View.extend({
			el: jQuery('#container'),

			initialize: function (options) {
				console.log('options', options.collections);
			},
			
			render: function(){
				var data;
				var compiledTemplate;

				/*parseData = this.collections.toJSON();
				
				compiledTemplate = _.template(projectListTemplate);
				this.$el.html( compiledTemplate(parseData) );*/

			}
		});

		return ProjectListView;
});