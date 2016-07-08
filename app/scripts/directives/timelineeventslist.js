'use strict';

/**
 * @ngdoc directive
 * @name angularTestApp.directive:timelineEventsList
 * @description
 * # timelineEventsList
 */
angular.module('angularTestApp')
    .directive('timelineEventsList', function () {
        return {
            templateUrl: '../../views/timelineeventslist.html',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {
            }
        };
    });
