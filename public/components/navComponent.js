angular.module('myApp').component('navComponent', {
  templateUrl : 'components/navComponent.html',
  restrict: 'E',
  controller: function($scope, $state, cartService){
    var ctrl = this;

    cartService.quantitySum().then(function(response){
        ctrl.quantitySum = response.data[0].sum;
    });
    $scope.search = function (searchTerm) {
      $state.go("searchTerm", {term: searchTerm});
    };
  }
});
