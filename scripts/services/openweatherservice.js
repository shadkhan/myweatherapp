'use strict';

/**
 * @ngdoc service
 * @name compuWeatherApp.openWeatherService
 * @description
 * # openWeatherService based on Factory design pattern 
 * Factory Pattern in the compuWeatherApp.
 */
angular.module('compuWeatherApp')
  .factory('openWeatherService', function ($http) {
    
   // var apiUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?cnt=7&callback=JSON_CALLBACK&APPID=b9ff3b3708c8ca1d2c46009a94cf428d';
   //https://home.openweathermap.org/api_keys generated API Keys here
    var apiUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?cnt=7&callback=JSON_CALLBACK&APPID=d5c4930480af2dd0b76c966aac1da0aa';
    var params = {};

    // Public API here
    return function (search) {
      var url = apiUrl;
      if (search && search.city) {
        params.q = search.city.replace('Shi', '');
        params.lang = search.lang;
        params.units = search.units;

        $.each(params, function(i, o) {
          url += '&' + i + '=' + o;
        });
        return $http.jsonp(url);
      }
    };
  });
