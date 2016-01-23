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

.controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('Jsondata/services.json').then(function (response) {
        $scope.services = response.data;
    });
}])
.controller('aboutCtrl', ['$scope', function ($scope) {
 
}])
.controller('servicesCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('Jsondata/services.json').then(function(response){
        $scope.services = response.data;
    });
}])
.controller('contactCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('Jsondata/locations.json').then(function (response) {
        $scope.locations = response.data;
    });
}]);
