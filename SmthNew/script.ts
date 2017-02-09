/// <reference path="angular.d.ts"/>
// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', []);

// configure our routes
scotchApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: function ($scope) {
                // create a message to display in our view
                $scope.message = 'Everyone come and see how good I look!';
            }
        })

    // route for the about page
        .when('/orientation', {
            templateUrl: 'pages/orientation.html',
            controller: 'aboutController'
        })

    // route for the contact page
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

scotchApp.controller('aboutController', function ($scope, orientationService: OrientationService) {
    orientationService.GetData().then(data => {
        var model = new Model1(data);
        $scope.Model = model;
    });
});

scotchApp.controller('contactController', function ($scope, bezierService: BezierService) {
    bezierService.GetData().then(data => {
        var model = new Model2(data);
        $scope.Model = model;
    });
});