app.factory('mushroomFactory', function($http){
  return {
    getList : function() {
      return $http
        .get('mushrooms.json')
        .then((response) => {
          console.log(response); // not list, its status codes
          return response.data; // this is the json parsed data
        })
    }
  }
})
