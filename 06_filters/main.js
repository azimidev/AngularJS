var myApp = angular.module('myApp', []);

myApp.filter('reverse', function() {
	return function(text) {
		return text.split('').reverse().join('');
	};
});

myApp.controller('FirstCtrl', [
	'$scope', function($scope) {
		$scope.message = "Your data";
	}
]);

myApp.controller('SecondCtrl', [
	'$scope', function($scope) {
		$scope.message = "";

		// $scope.reversedMessage = function (message) {
		// 	return message.split('').reverse().join('');
		// };

	}
]);