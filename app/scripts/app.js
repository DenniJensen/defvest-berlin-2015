'use strict';

/**
 * @ngdoc overview
 * @name ascii2BrainApp
 * @description
 * # ascii2BrainApp
 *
 * Main module of the application.
 */
angular
  .module('ascii2BrainApp', [
    'ngAnimate',
    'ngRoute',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/beginner',{
        templateUrl: 'views/beginner.html',
        controller: 'BeginnerCtrl',
        controllerAs: 'beginner'
      })
      .when('/geek', {
        templateUrl: 'views/geek.html',
        controller: 'GeekCtrl',
        controllerAs: 'geek'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
