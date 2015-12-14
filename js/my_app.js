// create the module and name it App
// also include ngRoute for all our routing needs
var App = angular.module('my_app', ['ngRoute', 'ngAnimate']);

// configure our routes
App.config(function($routeProvider) {
    $routeProvider
    //route for the home page
        .when('/', {
            templateUrl: './pages/about.html',
            controller: 'aboutController'
        })
        // route for the home page
        .when('/about', {
            templateUrl: './pages/about.html',
            controller: 'aboutController'
        })
        // route for the experience page
        .when('/resume', {
            templateUrl: './pages/resume.html',
            controller: 'resumeController'
        })
        // route for the education page
        .when('/interests', {
            templateUrl: './pages/interests.html',
            controller: 'interestsController'
        })

    //route for the contact page
    .when('/contact', {
        templateUrl: './pages/contact.html',
        controller: 'contactController'
    });
});

App.controller('aboutController', function($scope) {
    $scope.pageClass = 'about';
});

App.controller('resumeController', function($scope) {
    $scope.pageClass = 'resume';
});

App.controller('interestsController', function($scope) {
    $scope.pageClass = 'interests';
});

App.controller('contactController', function($scope) {
    $scope.pageClass = 'contact';
});


