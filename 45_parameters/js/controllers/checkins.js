myApp.controller('CheckInController',
		[
			'$scope', '$rootScope', '$routeParams', '$firebaseObject', '$firebaseArray', 'FIREBASE_URL',
			function($scope, $rootScope, $routeParams, $firebaseObject, $firebaseArray, FIREBASE_URL) {

				$scope.whichuser    = $routeParams.uId;
				$scope.whichmeeting = $routeParams.mId;

				var ref = new Firebase(
						FIREBASE_URL + 'users' + '/' +
						$scope.whichuser + '/' + 'meetings' + '/' +
						$scope.whichmeeting + '/' + 'checkins'
				);

				$scope.addCheckin = function() {
					var checkinsInfo = $firebaseArray(ref);
					var myData       = {
						firstname : $scope.user.firstname,
						lastname  : $scope.user.lastname,
						email     : $scope.user.email,
						date      : Firebase.ServerValue.TIMESTAMP
					};
					checkinsInfo.$add(myData);
				}

			} // END: function()
		]); // controller


