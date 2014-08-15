/// <reference path="../d.ts/DefinitelyTyped/angularjs/angular.d.ts" />

'use strict'

module HelloWorld {

    export interface HelloWorldScope extends ng.IScope {
        name: string;
        greeting: string;
        bye: () => void;
    }

    export class Controller {

        constructor($scope: HelloWorldScope) {
            $scope.name = 'TypeScript';
            $scope.greeting = 'Hello';
            $scope.bye = () => $scope.greeting = 'Good-bye';
        }
    }
}
