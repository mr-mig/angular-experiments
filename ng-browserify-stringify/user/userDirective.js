// DSL directive - it simply wraps the template.
// If there are any parameters
// then the directive should use isolated scope
// and do not depend on scope hierarchy
module.exports = function () {
	return {
		restrict: 'E',
		template: require('./user.tpl.html'),
		link: function (scope, element, attrs) {

		}
	}
};