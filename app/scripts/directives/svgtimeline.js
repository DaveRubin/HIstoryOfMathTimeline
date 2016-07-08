'use strict';

/**
 * @ngdoc directive
 * @name angularTestApp.directive:SvgTimeline
 * @description
 * # SvgTimeline
 */
angular.module('angularTestApp')
    .directive('svgTimeline', function () {
        return {
            templateUrl: '../../views/svgtimeline.html',
            restrict: 'E',
            // scope: {
            //     filteredTimelineItmes: '@filteredTimelineItmes'
            // },
            link: function postLink(scope, element, attrs) {
                console.log(scope.filteredTimelineItmes);
                var width = element.width();
                scope.svgTimelineWidth = width;
                scope.svgTimelineHeight = 200;

                scope.getXPos = function(timelineItem) {
                    var result = timelineItem.yearStart;
                    result = (result + 2000)/4000;
                    result = result*width;
                    return result;
                }
            }
        };
    });
