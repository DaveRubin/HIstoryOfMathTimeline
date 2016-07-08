'use strict';

/**
 * @ngdoc filter
 * @name angularTestApp.filter:timelineFilter
 * @function
 * @description
 * # timelineFilter
 * Filter in the angularTestApp.
 */
angular.module('angularTestApp')
    .filter('timelineFilter', function () {
        /**
         * Timeline filter filters timelineItemsArray by certain scope parameters
         */
        return function (timelineItemsArray,minYear,maxYear) {
            var filteredArray = [];
            for (var i = 0; i < timelineItemsArray.length; i++) {
                var timelineItem = timelineItemsArray[i];
                if (timelineItem.yearStart >= minYear &&
                    timelineItem.yearStart <= maxYear) {
                    filteredArray.push(timelineItem);
                }
            }
            return filteredArray;
        };
    });
