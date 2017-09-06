(function() {
    'use strict';
  
    angular.module('app.school')
      .service('schoolData', schoolData)
  
    schoolData.$inject = ['$http','config'];
    function schoolData($http,config){
        return {
            getSchoolList : getSchoolList,
            getCityList : getCityList,
            getLocalityList : getLocalityList,
            createSchool : createSchool
        }

        function getSchoolList (city, locality) {
            var url = config.server + config.api.school;
            var params = {}
            city && (params.city = city);
            locality && (params.city = city);
            return $http.get(url, {
                "params": {
                    "city": city,
                    "locality": locality,
                }
            }).then(function(response) {
                return response.data;
            });
        }    

        function getCityList () {
            var url = config.server + config.api.location;
            return $http.get(url, {
                "params": {
                    "type": "city"
                }
            }).then(function(response) {
                return response.data;
            });
        }

        function getLocalityList (city) {
            var url = config.server + config.api.location;
            console.log("locality list",city)
            return $http.get(url, {
                "params": {
                    "type": "locality",
                    "city": city,
                }
            }).then(function(response) {
                return response.data;
            });
        }
        function createSchool (data) {
            var url = config.server + config.api.school;
            var post_data = {
                "title": data.title,
                "locality": data.locality,
                "address": data.address
            }
            return $http.post(url, data);
        }

    }
  
    
  })();
  