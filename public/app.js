(function() {
  var app = angular.module('store', ['store-directives']);

  app.controller('StoreController',['$http', function($http) {
    var store = this
    this.products = []
    $http.get('/store-products.json').then(function(data){
      store.products = data.data
    })
  }]);
})();
