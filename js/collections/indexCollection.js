define([
	'underscore',
	'backbone',
	'models/indexModel'
], function(_, Backbone, indexModel){

	var ProjectCollection = Backbone.Collection.extend({
		model : indexModel,

		initialize: function(){
			this.add({title: 'list1'});
			this.add({title: 'list2'});
		}

	});

	return ProjectCollection;
	
})