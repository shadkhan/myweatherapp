'use strict';

/**
 * @ngdoc overview
 * @name compuWeatherApp
 * @description
 * # compuWeatherApp
 *
 * Main module of the application.
 */
angular
.module('compuWeatherApp', [
		'ngAnimate',
		'ngRoute',
		'vsGoogleAutocomplete'
		
	])
.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'views/home.html',
		controller : 'HomeCtrl'
	})
	.when('/product', {
		templateUrl : 'views/product.html',
		controller : 'ProductCtrl'
	})
	.otherwise({
		redirectTo : '/'
	});

});