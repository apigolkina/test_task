/// <reference path="angular.d.ts"/>
// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', []);
// configure our routes
scotchApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
        templateUrl: 'pages/home.html',
        controller: function ($scope) {
            // create a message to display in our view
            $scope.message = 'Everyone come and see how good I look!';
        }
    })
        .when('/orientation', {
        templateUrl: 'pages/orientation.html',
        controller: 'aboutController'
    })
        .when('/contact', {
        templateUrl: 'pages/bezier.html',
        controller: 'contactController'
    });
});
// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});
scotchApp.service('orientationService', OrientationService);
scotchApp.service('bezierService', BezierService);
scotchApp.controller('aboutController', function ($scope, orientationService) {
    orientationService.GetData().then(function (data) {
        var model = new Model1(data);
        $scope.Model = model;
    });
});
scotchApp.controller('contactController', function ($scope, bezierService) {
    bezierService.GetData().then(function (data) {
        var model = new Model2(data);
        $scope.Model = model;
    });
});
//# sourceMappingURL=script.js.map