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

            }
        };
    });
