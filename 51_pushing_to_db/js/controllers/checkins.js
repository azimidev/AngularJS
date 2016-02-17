myApp.controller('CheckInController',
		[
			'$scope', '$rootScope', '$location', '$routeParams', '$firebaseObject', '$firebaseArray', 'FIREBASE_URL',
			function($scope, $rootScope, $location, $routeParams, $firebaseObject, $firebaseArray, FIREBASE_URL) {

				$scope.whichuser    = $routeParams.uId;
				$scope.whichmeeting = $routeParams.mId;

				var ref = new Firebase(
						FIREBASE_URL + 'users' + '/' +
						$scope.whichuser + '/' + 'meetings' + '/' +
						$scope.whichmeeting + '/' + 'checkins'
				);

				var checkinsList = $firebaseArray(ref);
				$scope.checkins  = checkinsList;

				$scope.order     = "Date";
				$scope.direction = 'asc';
				$scope.query     = '';
				$scope.recordId  = '';

				$scope.addCheckin = function() {
					var checkinsInfo = $firebaseArray(ref);
					var myData       = {
						firstname : $scope.user.firstname,
						lastname  : $scope.user.lastname,
						email     : $scope.user.email,
						date      : Firebase.ServerValue.TIMESTAMP
					};
					checkinsInfo.$add(myData).then(function() {
						$location.path('/checkins/' + $scope.whichuser + '/' + $scope.whichmeeting + '/checkinsList');
					});
				}; // addCheckin

				$scope.deleteCheckin = function(id) {
					var refDel = new Firebase(
							FIREBASE_URL + 'users' + '/' +
							$scope.whichuser + '/' + 'meetings' + '/' +
							$scope.whichmeeting + '/' + 'checkins' + '/' + id
					);
					var record = $firebaseObject(refDel);
					record.$remove(id);
				};

				$scope.pickRandom = function() {
					var whichrecord = Math.round(Math.random() * (checkinsList.length) - 1);
					$scope.recordId = checkinsList.$keyAt(whichrecord);
				};

				$scope.showLove = function(myCheckin) {
					myCheckin.show = !myCheckin.show;
					if(myCheckin.userState == 'expanded') {
						myCheckin.userState = '';
					} else {
						myCheckin.userState = 'expanded';
					}
				};

				$scope.giveLove = function(myCheckin, myGift) {
					var refLove      = new Firebase(
							FIREBASE_URL + 'users' + '/' +
							$scope.whichuser + '/' + 'meetings' + '/' +
							$scope.whichmeeting + '/' + 'checkins' + '/' + myCheckin.$id + '/' + 'awards'
					);
					var checkinArray = $firebaseArray(refLove);
					var myData       = {
						name : myGift,
						date : Firebase.ServerValue.TIMESTAMP
					};
					checkinArray.$add(myData);
				};

			} // END: function()
		]); // controller


