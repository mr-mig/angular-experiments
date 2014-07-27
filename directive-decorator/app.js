// this stuff is built using browserify
// this file is an entry point

// high-level application module
angular.module('app', [
	//this line will evaluate the module and add it to angular module dependency
	require('./user').name,
	require('./hint').name
])
		.config(function($provide){
			// note the `Directive` prefix
			// this is needed for the $provide to find the right provider
			$provide.decorator('hintDirective', function($delegate, User){
				var directive = $delegate[0];
				var oldLink = directive.link;

				// If the decorated directive only has link function
				// you cannot decorate it without creating compile function
				// as link function get trapped in compile function scope (bug ???)
				directive.compile = function(element, attrs, transclude){
					return function link(scope, element) {
						// this may be a call to a REST endpoint
						// the idea is to put some default value in the scope
						scope.user = new User('Alex', 'Mig');

						// call the original fn version
						var args = Array.prototype.splice.call(arguments, 0);
						oldLink.apply(directive, args);
					};
				};

				// we need to delete the 'user' definition from the scope
				// as it will try to bound the value to the initial 'undefined' value from template!
				// this step is not needed if the scope value definition is '@' instead of '='
				delete(directive.scope.user);

				return $delegate;
			});
		});
