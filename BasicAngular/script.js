var app = angular.module("computerApp", [ngRoute]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/main', {
            templateUrl: 'main.html',
            controller: 'mainCtrl'
        });
}]);

//.controller('mainCtrl')