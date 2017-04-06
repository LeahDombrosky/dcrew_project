angular.module('myApp').service('cartService', function($http) {


this.addToBag = function(userId, product){
  console.log(userId, product);
  return $http({
    method: 'POST',
    url: 'api/cart/' + userId,
    data: product
  });
};

this.getCart = function(cartId) {
  return $http({
    method: 'GET',
    url: 'api/cart/' + cartId
  });
};


this.removeFromCart = function(cartId, productId){
  return $http({
    method: 'DELETE',
    url: '/api/cart/' + cartId + '?productId=' + productId
  });
};


this.quantitySum = function(){
  return $http.get("/api/quantitySum");
};




});
