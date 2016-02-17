myApp.factory('Authentication',
		[
			'$rootScope', '$location', '$firebaseObject', '$firebaseAuth', 'FIREBASE_URL',
			function($rootScope, $location, $firebaseObject, $firebaseAuth, FIREBASE_URL) {

				var ref  = new Firebase(FIREBASE_URL);
				var auth = $firebaseAuth(ref);

				auth.$onAuth(function(authUser) {
					if(authUser) {
						var userRef            = new Firebase(FIREBASE_URL + 'users/' + authUser.uid);
						$rootScope.currentUser = $firebaseObject(userRef);
					} else {
						$rootScope.currentUser = '';
					}
				});

				return {
					login    : function(user) {
						auth.$authWithPassword({
							email    : user.email,
							password : user.password
						}).then(function(regUser) {
							$location.path('success');
						}).catch(function(error) {
							$rootScope.message = error.message;
						});
						$rootScope.message = "Welcome " + user.email;
					}, //login
					register : function(user) {
						auth.$createUser({
							email    : user.email,
							password : user.password
						}).then(function(regUser) {
							var regRef = new Firebase(FIREBASE_URL + 'users');
							regRef.child(regUser.uid).set({
								date      : Firebase.ServerValue.TIMESTAMP,
								regUser   : regUser.uid,
								firstname : user.firstname,
								lastname  : user.lastname,
								email     : user.email
							});
							$rootScope.message = "Hello " + user.firstname + ", Thank you for registration.";
						}).catch(function(error) {
							$rootScope.message = error.message;
						});
					} // register
				}; // return
			}
		]);
