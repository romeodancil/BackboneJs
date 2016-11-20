define([

	'jquery',
	'underscore',
	'backbone',
	'text!/templates/index/indexView.html'

], function(
	jQuery, 
	_,
	Backbone, 

	projectListTemplate
){

	var ProjectListView = Backbone.View.extend({
		el: jQuery('#container'),

		initialize: function (options) {
			this.collections = options.collections			
		},
		
		render: function(){
			var compiledTemplate;
			compiledTemplate = _.template(projectListTemplate);
			empData = this.collections.toJSON();

			console.log('empData', empData);

			this.$el.html(compiledTemplate(empData));

		}
	});

	return ProjectListView;
});