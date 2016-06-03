app.controller('SceneOneController', ['$scope', 'sceneOne', '$routeParams', function($scope, sceneOne, $routeParams) {
  sceneOne.success(function(data) {
    $scope.detail = data[$routeParams.id];
  });
}]);
