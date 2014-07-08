// this is an angular+browserify module
// it can be required using require('./user')
// all angular-related stuff encapsulated here
module.exports = angular.module('user', [])
	// define angular factory using our factory function
	// the factory will create and expose a User contructor 
		.factory('User', function () {
			return require('./UserModel')
		});
	// in case we have a singleton instance we can use the exports directly
	//	.factory('User', return require('./UserModel'));
