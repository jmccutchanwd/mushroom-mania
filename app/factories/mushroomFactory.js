app.factory('mushroomFactory', function($http){
  return {
    getList : () => {
      return $http
        .get('mushrooms.json')
        .then((response) => {
          console.log(response); // not list, its status codes
          return response.data.list; // this is the json parsed data
        })
    }
  }
})
