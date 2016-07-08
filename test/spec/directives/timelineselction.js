'use strict';

describe('Directive: TimelineSelction', function () {

  // load the directive's module
  beforeEach(module('angularTestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-timeline-selction></-timeline-selction>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the TimelineSelction directive');
  }));
});
