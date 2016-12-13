'use strict';

/**
 * @ngdoc function
 * @name myWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myWebApp
 */
angular.module('myWebApp')
  .controller('MainCtrl', function () {
    
  })
  .directive('climaWidget', climaWidget);
 
function climaWidget() {
	
   var ddo = {
    templateUrl: 'views/clima-widget.html'
  };

  return ddo;
}