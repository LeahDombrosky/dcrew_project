angular.module('myApp').controller('homeController', function($scope, mainSrv, $state, $stateParams){

$scope.test = 'test is working';

// function slick() {
//       $('.featured_slick').slick({
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           dots: false,
//           arrows: true,
//           prevArrow: '.btn-prev',
//           nextArrow: '.btn-next',
//           autoplay: true,
//           responsive: [{
//                   breakpoint: 1024,
//                   settings: {
//                       dots: false,
//                       arrows: false,
//                       infinite: true,
//                       slidesToShow: 3,
//                       slidesToScroll: 1
//                   }
//               },
//               {
//                   breakpoint: 768,
//                   settings: {
//                       dots: false,
//                       arrows: false,
//                       infinite: true,
//                       slidesToShow: 1,
//                       slidesToScroll: 1
//                   }
//               }
//           ]
//       });
//   }


      // mainSrv.getProduct($stateParams.id).then(function(response){
      //   $scope.product = response;
      // });

    


  $scope.getProducts = function() {
        mainSrv.getProducts().then(function(products) {
          console.log(products);
            $scope.products = products;
            // slick();
        });
    };

    $scope.getProducts();



});
