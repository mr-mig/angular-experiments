// this stuff is built using browserify
// this file is an entry point

// high-level application module
angular.module('app', [
	//this line will evaluate the module and add it to angular module dependency
	require('./user').name
])
	.controller('mainCtrl', function ($scope, User) {
		$scope.user = new User('test', 'Some Street, US');
	});
