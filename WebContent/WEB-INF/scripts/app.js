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

var Greeting;
(function(Greeting) {
	var HelloWorld1 = (function() {
		function HelloWorld1(text) {
			this.text = text;
		}
		HelloWorld1.prototype.say = function() {
			console.log(this.text);
		};
		return HelloWorld1;
	})();
	Greeting.HelloWorld1 = HelloWorld1;
})(Greeting || (Greeting = {}));
var HelloWorld1 = new Greeting.HelloWorld1("Hello, World!");
HelloWorld1.say();
// # sourceMappingURL=app.js.map
