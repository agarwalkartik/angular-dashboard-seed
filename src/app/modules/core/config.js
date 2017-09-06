(function() {
  'use strict';

  var core = angular.module('app.core');

  var config = {
    name: 'EnglishDuniya Dashboard',
    appTitle: 'ED - Dashboard',
    version: '0.1.1',
    server: 'https://cc-test-2.zaya.in',
    api : {
      school : '/edservice/v1/schools/',
      location : '/edservice/v1/locations/'
    }
  };


  core.value('config', config);
})();
