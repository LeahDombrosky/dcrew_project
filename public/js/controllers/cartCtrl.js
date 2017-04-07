angular.module('myApp').controller('cartCtrl', function($scope, $stateParams, cartService) {
  console.log($stateParams.id)

$scope.cart =[]

  $scope.getCart = function() {
    cartService.getCart($stateParams.id).then(function(response) {
      console.log(response);
      $scope.cart = response.data;
    });

  };

$scope.quantitySum = cartService.quantitySum().then(function(response){
    $scope.quantitySum = response.data[0].sum;
  });


  $scope.removeFromCart = function(product){
    console.log(product);
    cartService.removeFromCart($stateParams.id, product.id).then(function(response){
      console.log(response);
      if (response.status === 200) {
          $scope.getCart();
      }
    }).catch(function(err) {
      console.log(err);
    });
  };

  $scope.changeQuantity = function(product, x) {
    product.quantity = x;
    if (x === 'Delete') {
      $scope.removeFromCart(product)
    }

  }
  $scope.getCart()

  $scope.options = [10,9,8,7,6,5,4,3,2,1,'Delete'];


$scope.getSubTotal = function(){
  let total = 0;
    for(var i = 0; i < $scope.cart.length; i++){
      let product = $scope.cart[i];
      total += (product.price * product.quantity);
    }
    return total;
}
$scope.logger = function (i) {
  console.log($scope.cart[i]);
}
$scope.getTax = function(){
  let preTotal = $scope.getSubTotal();
  let tax = preTotal * .0625;
  return tax;
}

$scope.getActualTotal = function(){
  let preTotal = $scope.getSubTotal();
  let tax = preTotal * .0625;
  return (preTotal + tax + 4.99);
}


});
