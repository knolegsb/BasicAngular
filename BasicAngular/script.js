var app = angular.module("computerApp", ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/main', {
            templateUrl: 'main.html',
            controller: 'mainCtrl'
        }).
        otherwise({ redirectTo: '/main' });
}])

.controller('mainCtrl', ['$scope', function ($scope) {
    $scope.person = 'John Doe';
}]);