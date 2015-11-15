'use strict';

angular.module('ascii2BrainApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.data = data_geek;
  });

angular.module('ascii2BrainApp')
  .controller('BeginnerCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('ascii2BrainApp')
  .controller('GeekCtrl', function () {
    this.data = {
      "!": 33,
      '"': 34,
      "#": 35,
      "$": 36,
      "%": 37,
      "&": 38,
      "'": 39,
      "(": 40,
      ")": 41,
      "*": 42,
      "+": 43,
      ",": 44,
      "-": 45,
      ".": 46,
      "/": 47,
      "0": 48,
      "1": 49,
      "2": 50,
      "3": 51,
      "4": 52,
      "5": 53,
      "6": 54,
      "7": 55,
      "8": 56,
      "9": 57,
      ":": 58,
      ";": 59
    };

  });
