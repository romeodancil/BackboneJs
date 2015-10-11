define([

	'jquery',
	'underscore',
	'backbone',
	'views/projects/list',
	'views/projects/list'

], function ($, _, Backbone, ProjectListView, UserListView) {
	var AppRouter = Backbone.Router.extend({
		routes: {
			'projects': 'showProjects',
			'users'	: 	'showUsers',

			'*actions' :  'defaultAction'
		}
	});

	var initialize = function(){
		var app_router = new AppRouter;

		app_router.on('showProjects', function(){

			var projectListView = new ProjectListView();
			ProjectListView.render();

		});

		app_router.on('showUsers', function(){

			var userListView = new UserListView();
			UserListView.render();

		});

		app_router.on('defaultAction', function(actions){

			console.log('no route', actions);

		});

		Backbone.history.start();
	};

	return {
		initialize: initialize
	};

});