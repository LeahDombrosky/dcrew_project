angular.module('myApp').service('mainSrv', function($http) {

    this.allProducts;

    this.getProducts = ()=> {
        return $http({
            method: 'GET',
            url: '/api/products'
        }).then((response) =>{
            // console.log(response);
            this.allProducts = response.data;
            console.log(this.allProducts);
            return response.data;
        });
    };

    ////////////////////////////////


    this.getProductCategory = function(cat) {
        return $http({
            method: 'GET',
            url: '/api/products?category=' + cat
        }).then(function(response) {
            console.log(response);
            return response.data;

    });
};


  this.getProduct = function(id){
    console.log(id);
    return $http({
      method: 'GET',
      url: '/api/products/' + id
    }).then(function(response){
      console.log(response);
      return response.data[0];
    });
  };





});
