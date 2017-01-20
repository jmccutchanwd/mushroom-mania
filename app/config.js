/* John McCutchan ========================================= */
console.log('Config');
app.config(function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('');

  $routeProvider
     .when('/', {
      controller: 'RootCtrl',
      templateUrl: '/partials/mushroom.html',
     })
     .when('/poison', {
      controller: 'PoisonCtrl',
      templateUrl: '/partials/poison.html',
     })
     .when('/non-poison', {
      controller: 'NonPCtrl',
      templateUrl: '/partials/non-poison.html',
     })
     .otherwise({
        redirectTo: '/',
     })
})
