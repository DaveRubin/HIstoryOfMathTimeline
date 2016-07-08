'use strict';

describe('Service: TimelineItemsService', function () {

  // load the service's module
  beforeEach(module('angularTestApp'));

  // instantiate service
  var TimelineItemsService;
  beforeEach(inject(function (_TimelineItemsService_) {
    TimelineItemsService = _TimelineItemsService_;
  }));

  it('should do something', function () {
    expect(!!TimelineItemsService).toBe(true);
  });

});
