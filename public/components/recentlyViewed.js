angular.module('myApp').component('recentlyViewed', {
  templateUrl : 'components/recentlyViewed.html',
  restrict: 'E',
  controller: function($scope, $state, mainSrv){
    var ctrl = this;

    ctrl.recentlyViewed = mainSrv.recentlyViewed.slice(0,6);
    // console.log(mainSrv.recentlyViewed,'this is a monkeys uncle');
    // setTimeout(function(){
    // },500);
  }
});
