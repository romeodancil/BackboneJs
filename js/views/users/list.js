define([

	'jquery',
	'underscore',
	'backbone',
	'collections/users',
	'text!templates/users/users.html'

], function ($, _, Backbone, UsersCollection, UsersTemplate) {

	var UsersView = Backbone.View.extend({

		el: $('#container'),

		initialize: function(){

			this.collection = new  UsersCollection();

			var compiledTemplate = _.template( UsersTemplate, { users: this.collection.model } );
			this.$el.html( compiledTemplate );

		}


	});

	return UsersView;


});