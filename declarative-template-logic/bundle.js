angular.module('res', ['ngResource'])
	.controller('ctrl', function ($scope) {
		console.log('ctrl scope', $scope)
	})
	.directive('resource', function ($resource) {
		return {
			restrict: 'E',
			priority: -100,
			scope: {
				url: '@',
				bindTo: '='
			},
			link: function (scope) {
				console.log('resource linked', scope.url);
				var res = $resource(scope.url);
				// populate value to the scope
				scope.bindTo = res.get();
			}
		}
	})
	.service('model', function ($q) {
		return function model(scope, cb) {
			// convention scope variable name
			scope.$watch('bindedModel', function (n, o) {
				if (o !== n) {
					cb(n);
				}
			});
		}
	})
	.directive('user', function (model) {
		return {
			restrict: 'E',
			require: 'model',
			// NOTE: current attempt limitation: this scope cannot be isolated!
			link: function (scope, element) {
				console.log('user dir linked')
				// this is a convention
				// each model-based directive should have 'bindedModel' in the scope
				// TODO should it be replaced with reactTo?
				model(scope, function (value) {
					element.html(value.name);
				});
			}
		}
	})
	.directive('model', function ($q) {
		// this is a mixin directive
		// it adds a parameter to the current scope
		// should be used with model-based directives
		return {
			restrict: 'EA',
			// create new scope to leave the parent scope untrashed
			scope: true,
			controller: function ($scope) {
			},
			link: function (scope, el, attrs) {
				var watchValue = attrs.model

				// setup the model value in the current scope
				// when it is available
				var unwatch = scope.$watch(watchValue, function (n, o) {
					if (o != n) {
						var model = n;
						if (model.$promise) {
							// convention scope variable name
							scope.bindedModel = model
						} else {
							// convention scope variable name
							scpope.bindedModel = $q.when(model)
						}
						unwatch();
					}
				}, true);
			}
		}
	});