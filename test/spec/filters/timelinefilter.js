'use strict';

describe('Filter: timelineFilter', function () {

  // load the filter's module
  beforeEach(module('angularTestApp'));

  // initialize a new instance of the filter before each test
  var timelineFilter;
  beforeEach(inject(function ($filter) {
    timelineFilter = $filter('timelineFilter');
  }));

  it('should return the input prefixed with "timelineFilter filter:"', function () {
    var text = 'angularjs';
    expect(timelineFilter(text)).toBe('timelineFilter filter: ' + text);
  });

});
