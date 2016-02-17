
myApp.controller('RegistrationController', [
	'$scope', '$firebaseAuth', 'FIREBASE_URL', function($scope, $firebaseAuth, FIREBASE_URL) {

		var ref  = new Firebase(FIREBASE_URL);
		var auth = $firebaseAuth(ref);

		$scope.login = function() {
			$scope.message = "Welcome " + user.email;
		};

		$scope.register = function() {
			auth.$createUser({
				email    : $scope.user.email,
				password : $scope.user.password
			}).then(function(regUser) {
				$scope.message = "Hello " + $scope.user.firstname + ", Thank you for registration.";
			}).catch(function(error) {
				$scope.message = error.message;
			});
		};

	}
]);
