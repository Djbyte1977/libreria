'use strict';

angular.module('libreria',['ngRoute','ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',{templateUrl:'views/landing.html',controller:'LandingPageController'})
      .when('/Libros',{templateUrl:'views/Libro/search.html',controller:'SearchLibroController'})
      .when('/Libros/new',{templateUrl:'views/Libro/detail.html',controller:'NewLibroController'})
      .when('/Libros/edit/:LibroId',{templateUrl:'views/Libro/detail.html',controller:'EditLibroController'})
      .otherwise({
        redirectTo: '/'
      });
  }])
  .controller('LandingPageController', function LandingPageController() {
  })
  .controller('NavController', function NavController($scope, $location) {
    $scope.matchesRoute = function(route) {
        var path = $location.path();
        return (path === ("/" + route) || path.indexOf("/" + route + "/") == 0);
    };
  });
