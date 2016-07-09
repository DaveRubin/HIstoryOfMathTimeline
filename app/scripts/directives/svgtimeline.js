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
                scope.legenndValue = [];

                function getRounding(delta) {
                    var rounding = 0;
                    if (delta > 1500) {
                        rounding = 400;
                    }
                    else if (delta > 1000) {
                        rounding = 200;
                    }
                    else if (delta > 500) {
                        rounding = 100;
                    }
                    else if (delta > 100) {
                        rounding = 50
                    }
                    else {
                        rounding = 10;
                    }
                    return rounding;
                }

                /**
                 * Updates array of indices for years legend on to of the marker
                 * @constructor
                 */
                function UpdateTimelineBar() {
                    var  newArray = [];
                    var delta = scope.slider.maxValue - scope.slider.minValue;
                    var rounding = getRounding(delta);
                    var startingGap = (scope.slider.minValue<0)?
                        Math.abs(scope.slider.minValue % rounding):
                        rounding - (scope.slider.minValue % rounding);
                    //always add start&ending years
                    newArray.push({
                        value: scope.slider.minValue,
                        pos: 0
                    });
                    newArray.push({
                        value: scope.slider.maxValue,
                        pos: scope.getYearTextPos({yearStart:scope.slider.maxValue})
                    });
                    console.log(startingGap);

                    var currentValueToAdd = scope.slider.minValue  + startingGap;
                    if (startingGap<rounding/2) {
                        currentValueToAdd += rounding;
                    }
                    while (currentValueToAdd < scope.slider.maxValue - rounding/2) {
                        newArray.push({
                            value: currentValueToAdd ,
                            pos: scope.getYearTextPos({yearStart:currentValueToAdd })
                        });
                        currentValueToAdd+=rounding;
                    }

                    scope.legenndValue = newArray;
                }

                scope.getXPos = function (timelineItem) {

                    var result = timelineItem.yearStart - scope.slider.minValue;
                    var delta = scope.slider.maxValue - scope.slider.minValue;
                    result /= delta;
                    result = result * width;
                    return result;
                };

                scope.getYearTextPos = function (timelineItem) {
                    var result = 0;
                    if (timelineItem != null) {
                        var pos = scope.getXPos(timelineItem);
                        var addition = ((pos)/scope.svgTimelineWidth)*-30;
                        result = pos+ addition;
                    }
                    return result;
                };

                scope.$watch('slider.minValue',function(val) {
                    UpdateTimelineBar();
                });
                scope.$watch('slider.maxValue',function(val) {
                    UpdateTimelineBar();
                });
            }
        };
    });
