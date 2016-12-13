'use strict';

describe('Directive: clima', function () {

  // load the directive's module
  beforeEach(module('myWebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<clima></clima>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the clima directive');
  }));
});
