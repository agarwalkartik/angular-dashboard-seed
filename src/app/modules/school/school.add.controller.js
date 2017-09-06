(function() {
    'use strict';
  
    angular.module('app.school')
      .controller('SchoolAddController', schoolAddController)
      schoolAddController.$inject = ['schoolData','$stateParams','notificator','$state','$loading'];
    function schoolAddController(schoolData,$stateParams,notificator,$state,$loading) {
      var ctrl = this;
      ctrl.newSchool = {}
      ctrl.fosList = [
        {id:"1",name:"Kamlesh"},
        {id:"2",name:"Deepak"},
        {id:"3",name:"Prem"},
        {id:"4",name:"Saurabh"},
        ]
      console.log("controller",schoolData);
      schoolData.getCityList().then(function(data) {
        // $loading.finish('main-loader');
        ctrl.cityList = data;
        console.log("Cities",ctrl.cityList)
    }, function(error) {
        // $loading.finish('main-loader');
        toastr.error(error)
        console.log(error);
    });


    ctrl.cityChanged = function(){
        console.log("City changed",ctrl.selectedCity)
        schoolData.getLocalityList(ctrl.selectedCity).then(function(localities){
            ctrl.localityList = localities
            console.log("Localities",localities)
        })
    }

    ctrl.addSchool = function(){
      console.log("addSchool")
      if (!ctrl.selectedCity) {
        notificator.error("Select a City")
        return
    }
    if (!ctrl.selectedLocality) {
        notificator.error("Select a Locality")
        return
    }
    if (!ctrl.newSchool.title) {
        notificator.error("Enter School Title")
        return
    }

    ctrl.newSchool.address = ctrl.newSchool.title

    // $loading.start('main-loader');
    ctrl.newSchool.locality = ctrl.selectedLocality;
    schoolData.createSchool(ctrl.newSchool).then(function(data) {
      console.log(data)
        notificator.success("School Created", "Success")
        $state.reload()
    }, function(error) {
        // $loading.finish('main-loader');
        notificator.error(error)
        console.log(error);
    });
    }
      
    }
  })();
  