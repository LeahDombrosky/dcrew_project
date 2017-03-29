angular.module('myApp').controller('productsCtrl', function ($scope, mainSrv, $state){

    $scope.getProducts = function(){
      console.log('working ctrl')
      mainSrv.getProducts().then(function(response){
        $scope.products = response;
      });
    };

    $scope.getProducts();

});
