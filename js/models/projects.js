define([
	'underscore',
	'backbone'
], function(_, Backbone){

	var ProjectModel = Backbone.Model.extend({

		initialize: function(){
			this.getData();				
		},

		getData: function(){

			var data = [{
				fname : 'romeo',
				laname: 'dancil'
			}];

			return data;

		}

	});

	return ProjectModel;

});