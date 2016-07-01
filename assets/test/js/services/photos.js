app.factory('photos', ['$http', function($http) {
  return $http.get('assets/JSON/test.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           console.log(data);
           return data;
         });
}]);
