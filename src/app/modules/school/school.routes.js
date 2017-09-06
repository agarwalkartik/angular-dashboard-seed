

(function() {
    'use strict';
  
    var module = angular.module('app.school', ['ui.router']);
  
    module.config(appConfig);
  
    appConfig.$inject = ['$stateProvider'];
  
    function appConfig($stateProvider) {
        $stateProvider
        .state('app.manage-school-remote-config', {
          url: '/manage-school-remote-config/:schoolGroupId',
          params: {
            schoolGroupId: null
          },
          templateUrl: 'app/modules/school/views/manage-school-remote-config.html',
          controller: 'ManageSchoolRemoteConfigController',
          controllerAs: 'vm'
        })
        .state('app.update-school-remote-config', {
          url: '/app/update-school-remote-config',
          templateUrl: 'app/modules/school/views/update-school-remote-config.html',
          controller: 'UpdateSchoolRemoteConfigController',
          params: {
              selectedSchool: null
          },
          controllerAs: 'vm'
        })
        .state('app.add-school', {
          url: '/app/add-school',
          templateUrl: 'app/modules/school/views/add-school.html',
          controller: 'SchoolAddController',
          controllerAs: 'vm'
        });
    }
  })();
  