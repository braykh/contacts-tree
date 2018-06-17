'use strict';
var contactsApp = angular.module('contactsApp', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'app/src/modules/home/home.html',
        controller: 'homeController'
    })
    .otherwise({
        redirectTo: '/'
     });
});
