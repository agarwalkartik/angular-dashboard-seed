(function() {
  'use strict';

  var core = angular.module('app.core', [
    /*
     * Angular modules
     */
    'ngResource',
    'ui.router',
    'ngAnimate',
    'toastr',
  ]);

  core.config(appConfig);
  httpRequestInterceptor.$inject = ['$httpProvider']

  core.factory('myInterceptor',[function(){
    var interceptors = {
      request: function(config) {
        if (config.url && (config.url.split(':')[0] === 'http' || config.url.split(':')[0] === 'https')) {
          config.headers['username'] = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).username;
          config.headers['password'] = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).password;
        }
        return config;
      }
    };
    return interceptors;
  }])
  function httpRequestInterceptor($httpProvider){
    
    $httpProvider.interceptors.push('myInterceptor');
  }
  
  core.config(['$httpProvider',httpRequestInterceptor])
  
  appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function appConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'app/modules/core/app.html'
      });

    $urlRouterProvider.otherwise(function($injector) {
      var $state = $injector.get('$state');
      $state.go('app.dashboard');
    });
  }
})();
