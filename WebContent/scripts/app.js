/// <reference path="../d.ts/DefinitelyTyped/angularjs/angular.d.ts" />
'use strict';
var HelloWorld;
(function(HelloWorld) {
	var Controller = (function() {
		function Controller($scope) {
			$scope.name = 'TypeScript';
			$scope.greeting = 'Hello';
			$scope.bye = function() {
				return $scope.greeting = 'Good-bye';
			};
		}
		return Controller;
	})();
	HelloWorld.Controller = Controller;
})(HelloWorld || (HelloWorld = {}));
// # sourceMappingURL=app.js.map
