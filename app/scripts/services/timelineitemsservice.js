'use strict';

/**
 * @ngdoc service
 * @name angularTestApp.TimelineItemsService
 * @description
 * # TimelineItemsService
 * Service in the angularTestApp.
 */
var test;
angular.module('angularTestApp')
    .service('TimelineItemsService', function ($http,$q) {
        // AngularJS will instantiate a singleton by calling "new" on this function

        function CreateNewTimelineItem(jsonObject) {
            return new TimelineItem(jsonObject);
        }

        this.CreateNewTimelineItem = function (jsonObject) {
        };

        this.GetTimelineItems = function () {
            var deferred = $q.defer();
            var items = [];

            $http.get('scripts/data/dataJson.json').
            success(function(data, status, headers, config) {
                console.log(data);
                for (var i = 0; i < data.feed.entry.length; i++) {
                    var item = data.feed.entry[i];
                    items.push(CreateNewTimelineItem(item));
                }
                test = items[15];
                console.log(items[15]);
                deferred.resolve(items);
            }).
            error(function(data, status, headers, config) {
                // log error
                deferred.reject("Error");
            });

            return deferred.promise;

        };

    });
