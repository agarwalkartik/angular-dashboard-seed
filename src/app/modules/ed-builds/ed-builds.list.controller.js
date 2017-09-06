(function() {
    'use strict';
  
    angular.module('app.ed-builds')
      .controller('ListEdBuildsController', listEdBuildsController)
      listEdBuildsController.$inject = ['schoolData','$stateParams',"$firebaseArray"];
    function listEdBuildsController(
      schoolData,$stateParams, $firebaseArray
      ) {
      var ctrl = this;
      ctrl.versions = []
      var ref = firebase.database().ref('zaya-mobile-pipeline')
      ctrl.builds = $firebaseArray(ref);
      ctrl.builds.$watch(function(event) {
          sort(ctrl.builds)
        console.log(ctrl.builds,event);
      });

      function sort(builds){
          builds.forEach(function(element) {
            ctrl.versions.push(element.$id)
            console.log(element)
          });
      }
    }
  })();
  