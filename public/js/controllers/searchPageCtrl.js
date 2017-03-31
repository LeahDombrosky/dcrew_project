angular.module('myApp').controller('searchPageCtrl', function ($scope, mainSrv, $state){

      console.log('working search ctrl');
      mainSrv.getProducts().then(function(response){
        console.log(response);
        $scope.products = response;
      });





      mainSrv.getProduct($stateParams.id).then(function(response){
        $scope.product = response;
      });



});
