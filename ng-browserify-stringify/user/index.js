module.exports = angular.module('user', [])
		.factory('User', require('./UserModel'))
		.directive('user', require('./userDirective'));