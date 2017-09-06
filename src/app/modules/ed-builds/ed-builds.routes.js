

(function() {
    'use strict';
  
    var module = angular.module('app.ed-builds', ['ui.router']);
  
    module.config(appConfig);
  
    appConfig.$inject = ['$stateProvider'];
  
    function appConfig($stateProvider) {
        $stateProvider
        .state('app.list-ed-builds', {
          url: '/list-ed-builds',
          templateUrl: 'app/modules/ed-builds/views/list-ed-builds.html',
          controller: 'ListEdBuildsController',
          controllerAs: 'vm'
        })
    }
  })();
  