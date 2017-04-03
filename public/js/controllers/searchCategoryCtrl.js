angular.module('myApp').controller('searchCategoryCtrl', function($scope, mainSrv, $state) {

    $scope.searchInput = "searchCategoryCtrl";

    if ($state.params.category) {
        mainSrv.getProductCategory($state.params.category).then(function(response) {
            // console.log(response);
            $scope.products = response;
        });
    } else if ($state.params.term) {
        if (mainSrv.allProducts) {
            $scope.products = mainSrv.allProducts;
        } else {
            mainSrv.getProducts().then(response => {
                console.log(response);
                $scope.products = response.data
            })
        }
        $scope.searchFilter = $state.params.term;
    }

    $scope.currentPage = 1;
    $scope.pageSize = 4;

    //////





});
