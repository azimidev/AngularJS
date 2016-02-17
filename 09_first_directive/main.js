var app = angular.module('superhero', []);

app.directive('superman', function() {
	return {
		restrict : "E",
		template : '<div class="jumbotron"><div class="container"><h1>Hello, world!</h1></div></div>'
	};
});