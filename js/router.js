define([

	'jquery',
	'underscore',
	'backbone',
	'views/index/indexView'

], function (jQuery, _, Backbone, indexView) {
	var AppRouter = Backbone.Router.extend({
		routes: {
			'mainindex': 'showIndex',
			'*actions' :  'defaultAction'
		}
	});

	var initialize = function(){
		
		var app_router = new AppRouter;

		app_router.on('route:showIndex', function(){
			var renderIndexview = new indexView();
			renderIndexview.render();

		});

		app_router.on('route:defaultAction', function(actions){
			console.log('no route', actions);
		});

		Backbone.history.start();
	};

	return {
		initialize: initialize
	};

});