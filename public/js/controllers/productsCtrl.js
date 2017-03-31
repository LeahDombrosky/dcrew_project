angular.module('myApp').controller('productsCtrl', function ($scope, mainSrv, $stateParams){
//get Products
    $scope.getProducts = function(){
      console.log('working ctrl')
      mainSrv.getProducts().then(function(response){
        $scope.products = response;
      });
    };

    $scope.getProducts();
/////////////////////////////////////////////////////////////
//get product
console.log($stateParams.id)
mainSrv.getProduct($stateParams.id).then(function(response){
  $scope.product = response;
});





});
