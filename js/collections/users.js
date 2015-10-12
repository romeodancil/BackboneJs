define([

	'underscore',
	'backbone',
	'models/users'

], function (_, Backbone, UsersModel) {

	var UsersCollection = Backbone.Collection.extend({

		models: UsersModel

	});

	return	UsersCollection;

});