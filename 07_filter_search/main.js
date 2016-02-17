var myApp = angular.module('myApp', []);
myApp.controller('FilterController', [
	'filterFilter', function(filterFilter) {
		this.array         = [
			{name : 'Amir'},
			{name : 'Shadi'},
			{name : 'Mahdi'},
			{name : 'Hassan'},
			{name : 'Maziar'},
			{name : 'Mina'}
		];
		this.filteredArray = filterFilter(this.array, 'n');
	}
]);