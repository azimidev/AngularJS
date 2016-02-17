
var myApp = angular.module('myApp', [
	'ngRoute',
	'artistControllers'
]);

myApp.config([
	'$routeProvider', function($routeProvider) {
		$routeProvider.
		when('/list', {
			templateUrl : 'partials/list.html',
			controller  : 'ListController'
		}).when('/details/:itemId', {
			templateUrl : 'partials/details.html',
			controller  : 'DetailsController'
		}).otherwise({
			redirectTo : '/list'
		});
	}
]);

var artistControllers = angular.module('artistControllers', []);

artistControllers.controller('ListController', [
	'$scope', '$http', function($scope, $http) {
		$http.get('data.json').success(function(data) {
			$scope.artists     = data;
			$scope.artistOrder = 'name';
		});
	}
]);

artistControllers.controller('DetailsController', [
	'$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
		$http.get('data.json').success(function(data) {
			$scope.artists     = data;
			$scope.whichItem = $routeParams.itemId;
		});
	}
]);
