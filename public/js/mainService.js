angular.module('myApp').service('mainSrv', function($http) {

    this.getProducts = function() {
        return $http({
            method: 'GET',
            url: '/api/products'
        }).then(function(response) {
            console.log(response);
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







});
