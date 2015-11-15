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
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
