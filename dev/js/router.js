define([

	'jquery',
	'underscore',
	'backbone',
	'collections/indexCollection',
	'views/index/indexView'

], function (jQuery, _, Backbone, indexCollection, indexView) {
	var AppRouter = Backbone.Router.extend({
		routes: {
			'mainindex': 'showIndex',
			'*actions' :  'defaultAction'
		}
	});

	var initialize = function(){
		
		var app_router = new AppRouter;

		app_router.on('route:showIndex', function(){
			var data = new indexCollection();
			var renderIndexview = new indexView({
				collections: data
			});

			data.fetch().done( function(response) {;
			 	renderIndexview.render(); 	
			});
  
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