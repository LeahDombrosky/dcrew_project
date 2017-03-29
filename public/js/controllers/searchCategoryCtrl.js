angular.module('myApp').controller('searchCategoryCtrl', function ($scope, mainSrv, $state){
  console.log($state.params.category);
      console.log('working searchCategory ctrl');
      mainSrv.getProductCategory($state.params.category).then(function(response){
        console.log(response);
        $scope.products = response;
      });



      $scope.currentPage = 1;
      $scope.pageSize = 4;



});
