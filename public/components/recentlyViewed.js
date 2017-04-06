angular.module('myApp').component('recentlyViewed', {
  templateUrl : 'components/recentlyViewed.html',
  restrict: 'E',
  controller: function($scope, $state, mainSrv){
    var ctrl = this;

    ctrl.recentlyViewed = mainSrv.recentlyViewed.slice(0,6);

  }
});
