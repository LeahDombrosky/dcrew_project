angular.module('myApp').service('mainSrv', function($http) {
    const self = this;

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
      var reviews = []
      for (var product of response.data) {
        reviews.push(product.review);
      }
      var singleProduct = response.data[0]
      singleProduct.reviews = reviews;
      // this.recentlyViewed = []
      self.recentlyViewed = self.recentlyViewed.filter(c => c.id !== singleProduct.id)
      self.recentlyViewed.push(singleProduct)
      // self.recentlyViewed = newArr
      // console.log(newArr);
      return singleProduct
    });
  };


  this.submitReview = function(productId, review){
    return $http({
      method: 'POST',
      url: '/api/products/review/' + productId,
      data: review
    });
  };


  self.recentlyViewed = [];

//Remove duplicates in array
  // self.uniqueRecentlyViewed = self.recentlyViewed.filter(function(val,idx){
  //   console.log(this);
  //   return self.recentlyViewed.indexOf(val) == idx;
  // })


});
