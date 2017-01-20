app.controller('RootCtrl', function($scope, $routeParams, $http, mushroomFactory){
  console.log('RootCtrl');

  mushroomFactory.getList()
  .then((value) => {
    $scope.mushrooms = value.mushrooms;
    console.log('Factory: ', value.mushrooms)
  })
})
// if('#b1' === true){
//   console.log('Poison')
// }
// //$scope, $routeParams, $http, mushroomFactory
