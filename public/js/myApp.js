angular.module('myApp', ['ui.router', 'angularUtils.directives.dirPagination', 'ui.bootstrap'])
  .config(function($stateProvider, $urlRouterProvider, $sceProvider){
      $stateProvider
        .state('home',{
          url:'/',
          templateUrl:'views/home.html',
          controller:'homeController'
        })
        .state('search',{
          url:'/search',
          templateUrl:'/views/searchPage.html',
          controller:'searchPageCtrl'
        })
        .state('searchCategory',{
          url:'/search/:category',
          templateUrl:'/views/searchCategory.html',
          controller:'searchCategoryCtrl'
        })
        .state('searchTerm',{
          url:'/searchTerm/:term',
          templateUrl:'/views/searchterm.html',
          controller:'searchCategoryCtrl'
        })
        .state('product',{
          url:'/product/:id',
          templateUrl: '/views/product.html',
          controller: 'productsCtrl'
        })
        .state('sale',{
          url:'/sale',
          templateUrl:'/views/sale.html'
        })
        .state('cart',{
          url:'/cart/:id',
          templateUrl:'/views/cart.html',
          controller: 'cartCtrl'
        });


        $urlRouterProvider
                  .otherwise('/');

});
