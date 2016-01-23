var app = angular.module("computerApp", ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/main', {
            templateUrl: 'main.html',
            controller: 'mainCtrl'
        }).
        when('/about', {
            templateUrl: 'about.html',
            controller: 'aboutCtrl'
        }).
        when('/services', {
            templateUrl: 'services.html',
            controller: 'servicesCtrl'
        }).
        when('/contact', {
            templateUrl: 'contact.html',
            controller: 'contactCtrl'
        }).
        otherwise({ redirectTo: '/main' });
}])

.controller('mainCtrl', ['$scope', function ($scope) {
    $scope.person = 'John Doe';
}])
.controller('aboutCtrl', ['$scope', function ($scope) {
    $scope.person = 'John Doe';
}])
.controller('servicesCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('services.json').then(function(response){
        $scope.services = response.data;
    });
}])
.controller('contactCtrl', ['$scope', function ($scope) {
    $scope.person = 'John Doe';
}]);
