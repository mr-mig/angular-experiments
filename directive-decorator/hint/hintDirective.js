function hintDirective() {
	return {
		restrict: 'A',
		scope: {
			user: '='
		},
		link: function (scope, element) {

			// note: this is a violation of Demeter's Law!
			// used here just in test purposes to show hot to deal with '=' scope values!
			// in real life you should use '@' if you need to pass some text to the directive!
			element.html('Dear ' + scope.user.getUserData() + ', this hint is for you!')
		}
	}
}

module.exports = hintDirective;