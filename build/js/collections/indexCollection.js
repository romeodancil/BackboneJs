define(["underscore","backbone","models/indexModel"],function(e,n,o){var d=n.Collection.extend({model:o,url:"data/data.json",parse:function(e){return e.employees}});return d});