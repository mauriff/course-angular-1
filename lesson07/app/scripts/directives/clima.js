'use strict';

/**
 * @ngdoc directive
 * @name myWebApp.directive:clima
 * @description
 * # clima
 */
angular.module('myWebApp')
  .directive('climaWidget', function () {
     var ddo = {
    templateUrl: 'views/clima-widget.html'
  };

  return ddo;
  });
