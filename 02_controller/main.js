var myApp = angular.module('myApp',[]);

myApp.controller('FirstCtrl', ['$scope', function($scope) {
  $scope.data = {message: "Hello"};
}]);