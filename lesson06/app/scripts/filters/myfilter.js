'use strict';

/**
 * @ngdoc filter
 * @name myAppApp.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the myAppApp.
 */
angular.module('myAppApp')
  .filter('myFilter', function () {
    return function (input) {
      return 'myFilter filter: ' + input;
    };
  });
