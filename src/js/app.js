angular.module('ÇetinlerArçelik', [
  'ngRoute',
  'mobile-angular-ui',
  'ÇetinlerArçelik.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});