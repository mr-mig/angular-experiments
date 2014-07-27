// this is an angular+browserify module
// it can be required using require('./user')
// all angular-related stuff encapsulated here
module.exports = angular.module('user', [])
		.factory('User', require('./UserModel'));