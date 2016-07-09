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
            link: function postLink(scope, element, attrs) {

                var width = element.width();

                scope.svgTimelineWidth = width;
                scope.svgTimelineHeight = 200;

                scope.getXPos = function(timelineItem) {

                    var result = timelineItem.yearStart - scope.slider.minValue;
                    var delta= scope.slider.maxValue - scope.slider.minValue;
                    result /= delta;
                    result = result*width;
                    return result;
                }
            }
        };
    });
