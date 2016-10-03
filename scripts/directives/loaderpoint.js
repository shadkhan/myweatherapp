'use strict';

/**
 * @ngdoc directive
 * @name compuWeatherApp.directive:searchBtn
 * @description
 * # searchBtn
 */
angular.module('compuWeatherApp')
  .directive('searchBtn', function (openWeatherService) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

        // waiting status (for API)
        scope.waiting = true;

        // listen on click event
        element.on('click', function () {
          // show loading... as button text
          var $btn = $(element).button('loading');
          // call MainCtrl api
		  //debugger;
          openWeatherService(scope.search).success(function (data) {
            scope.notFoundError = false;
            scope.weathers = data;
            scope.unitFlag = (scope.search.units === 'metric' ? '°C' : '°F');

            //  hide day details div, show list div
            scope.weekFlag = true;
            scope.dayFlag = false;
          }).error(function (data, status) {
            //show error message
            if (status === 404) {
              scope.notFoundError = true;
            }
            //  ...
          }).finally(function () {
            // all completed
            $btn.button('reset');
            setTimeout(function() {
              scope.waiting = true;
              scope.$apply();
            }, 0);
          });
        });

      }
    };
  });
