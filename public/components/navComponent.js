angular.module('myApp').component('navComponent', {
  templateUrl : 'components/navComponent.html',
  restrict: 'E',
  controller: function($scope, $state){
    $scope.search = function (searchTerm) {
      $state.go("searchTerm", {term: searchTerm})
    }

  }


});
