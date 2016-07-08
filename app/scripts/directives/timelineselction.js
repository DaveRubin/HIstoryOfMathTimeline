'use strict';

/**
 * @ngdoc directive
 * @name angularTestApp.directive:TimelineSelction
 * @description
 * # TimelineSelction
 */
angular.module('angularTestApp')
  .directive('timelineSelection', function () {
    return {
      templateUrl: '../../views/timelineselection.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
