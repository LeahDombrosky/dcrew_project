angular.module('myApp').controller('cartCtrl', function($scope, $stateParams, cartService) {
  console.log($stateParams.id)



  $scope.getCart = function() {
    cartService.getCart($stateParams.id).then(function(response) {
      console.log(response)
      $scope.cart = response.data
    });

  }



  $scope.removeFromCart = function(product){
    console.log(product);
    cartService.removeFromCart($stateParams.id, product.id).then(function(response){
      console.log(response);
      if (response.status === 200) {
          $scope.getCart()
      }
    }).catch(function(err) {
      console.log(err)
    })
  };

  $scope.changeQuantity = function(product, x) {

    if (x === 'Delete') {
      $scope.removeFromCart(product)
    }

  }
  $scope.getCart()

  $scope.options = [10,9,8,7,6,5,4,3,2,1,'Delete'];


});
