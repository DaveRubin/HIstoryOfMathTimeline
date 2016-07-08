'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
  .controller('MainCtrl', function ($scope,$http,TimelineItemsService) {

      function onRejected() {

      }

      function onFulfilled(items) {
        $scope.timelineItems = items;
          
      }

      TimelineItemsService.GetTimelineItems()
          .then(onFulfilled,onRejected);
      var MIN = 0;
      var MAX = 4;
      $scope.minimumYear = 0;
      $scope.maximumYear = 1000;
      $scope.selectedRangeStart = 1;
      $scope.selectionRangeEnd = 10;
      $scope.timelineItems = [];

      $scope.slider = {
          minValue: $scope.selectedRangeStart ,
          maxValue: $scope.selectionRangeEnd ,
          options: {
              floor:$scope.minimumYear,
              ceil: $scope.maximumYear,
              minRange: Config.slider_push_range,
              pushRange: true,
              draggableRange: true
          }
      };

      $scope.$on("slideEnded", function() {
          // user finished sliding a handle
          $scope.selectedRangeStart = $scope.slider.minValue;
          $scope.selectionRangeEnd = $scope.slider.maxValue;
          $scope.$digest()
      });

      $scope.GetItems = function() {
          return $scope.timelineItems;
      };

  });
