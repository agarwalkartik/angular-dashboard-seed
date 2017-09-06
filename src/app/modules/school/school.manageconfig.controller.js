(function() {
    'use strict';
  
    angular.module('app.school')
      .controller('ManageSchoolRemoteConfigController', manageSchoolRemoteConfigController)
      manageSchoolRemoteConfigController.$inject = ['schoolData','$stateParams'];
    function manageSchoolRemoteConfigController(
      schoolData,$stateParams
      ) {
      var ctrl = this;
      console.log("controller",schoolData)  

      schoolData.getSchoolList().then(function(data) {
        ctrl.schoolList = data;
        if ($stateParams.schoolGroupId) {
            console.log("$stateParams.schoolGroupId", $stateParams.schoolGroupId)
            $scope.schoolList.forEach(function(school) {
                if (school.group_id == $stateParams.schoolGroupId) {
                    console.log("$Matched", school.group_id, $stateParams.schoolGroupId)
                    ctrl.selectedSchool = school
                }
            })
            console.log("Selected School", ctrl.selectedSchool)
        }
        if (ctrl.selectedSchool) {
            var url = CONSTANT.SERVER + '/edservice/v1/school-remote-config/?group_id=' + ctrl.selectedSchool.group_id;
            $http.get(url).then(function(data) {
                if (data.data.school_config) {
                    if (data.data.school_config.school_config_version) {
                        ctrl.schoolConfigVersion = data.school_config_version
                    }
                    ctrl.schoolConfig = data.data.school_config.data
                    console.log("$scope.schoolConfig", ctrl.schoolConfig)
                } else {
                    console.log("NO school config")
                }
                // $loading.finish('main-loader')
            }, function(error) {

            })
        } else {
            // $loading.finish('main-loader')
        }
    }, function(error) {
        console.log(error);
    });
    }
  })();
  