var app = angular.module('superhero', []);

app.directive('superman', function() {
	return {
		//restrict : "E",
		//template : '<div class="jumbotron"><div class="container"><h1>Hello, world!</h1></div></div>'

		//restrict : "A",
		//link     : function() {
		//	alert('Amir hastam az parsclick.net');
		//}

		//restrict : "C",
		//link     : function() {
		//	alert('Amir hastam az parsclick.net');
		//}

		restrict : "M",
		link     : function() {
			alert('Amir hastam az parsclick.net');
		}

	};
});