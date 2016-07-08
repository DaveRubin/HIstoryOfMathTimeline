'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
    .controller('MainCtrl', function ($scope, $http,RzSliderOptions, TimelineItemsService) {

        $scope.ready = false;
        $scope.totalMin = 0;
        $scope.totalMax = 50;
        $scope.selectedRangeStart = 1;
        $scope.selectionRangeEnd = 10;
        $scope.filteredTimelineItmes = [];
        $scope.allTimelineItems = [];

        $scope.slider = {
            minValue: $scope.selectedRangeStart,
            maxValue: $scope.selectionRangeEnd,
            options: {
                floor: $scope.totalMin,
                ceil: $scope.totalMax,
                minRange: Config.slider_push_range,
                pushRange: true,
                draggableRange: true
            }
        };
        
        function onRejected() {

        }

        /**
         * iterate through all of timeline items
         * and set min max values to timeline
         */
        function updateSliderMinMax() {
            var min = Number.MAX_VALUE;
            var max = Number.MIN_VALUE;

            for (var i = 0; i < $scope.allTimelineItems.length; i++) {
                var obj = $scope.allTimelineItems[i];
                if (min >= obj.yearStart) {
                    min = obj.yearStart;
                }
                if (max <= obj.yearStart) {
                    max = obj.yearStart;
                }
            }
            console.log( $scope.allTimelineItems.length);
            console.log(min,max);
            $scope.slider.options = {
                floor: min ,
                ceil: max,
                minRange: Config.slider_push_range,
                pushRange: true,
                draggableRange: true,
                translate: function(val) {
                    if (val == Config.minimum_year_toShow) {
                        return Config.minimum_year_toShow + " and before";
                    }
                    else return val;
                }
            };
            // $scope.totalMin = min;
            // $scope.totalMax = max;
            //$scope.slider.update

        }

        /**
         * When getting items from json
         * set ready flag as true
         * and get min\max values from items, and set min max to slider
         * @param items
         */
        function onFulfilled(items) {
            $scope.ready = false;
            $scope.allTimelineItems = items;
            updateSliderMinMax();
        }

        function UpdateFilteredItems() {

            var filteredArray = [];
            for ( var i = 0; i < $scope.allTimelineItems.length; i++) {

                var timelineItem = $scope.allTimelineItems[i];
                if (timelineItem.yearStart >= $scope.slider.minValue &&
                    timelineItem.yearStart <= $scope.slider.maxValue) {

                    filteredArray.push(timelineItem);
                }
            }

            $scope.filteredTimelineItmes =  filteredArray;
        }

        TimelineItemsService.GetTimelineItems()
            .then(onFulfilled, onRejected);


        /**
         * When slider is set , filter the items
         */
        $scope.$watch('slider.minValue', function(val) {
            UpdateFilteredItems();
        });
        $scope.$watch('slider.maxValue', function(val) {
            UpdateFilteredItems();
        });
        // $scope.$on("slideEnded", function () {
        //     $scope.selectedRangeStart = $scope.slider.minValue;
        //     $scope.selectionRangeEnd = $scope.slider.maxValue;
        //     UpdateFilteredItems();
        //     $scope.$digest();
        // });

        $scope.GetItems = function () {
            return $scope.filteredTimelineItmes;
        };

    });
