angular.module('myApp').controller('productsCtrl', function ($scope, mainSrv, cartService, $state, $stateParams){



  $scope.userId = 1;


  // TODO: Add users if time;
//get Products
    // $scope.getProducts = function(){
    //   console.log('working ctrl');
    //   mainSrv.getProducts().then(function(response){
    //     $scope.products = response;
    //   });
    // };
    //
    // $scope.getProducts();
/////////////////////////////////////////////////////////////
//get product
console.log($stateParams.id);
mainSrv.getProduct($stateParams.id).then(function(response){
  $scope.product = response;
});

//add to cart
$scope.addToBag = function(product){
  cartService.addToBag($scope.userId, product).then(function(response) {
    console.log(response);
    // Flash message
    if (response.status === 200) {
      $state.go('cart', {id: response.data.id});
    }
    // Maybe go to cart
  }).catch(function(err) {
    console.log(err);
    $scope.error = true;
  });
};


//quantity calculate




});
