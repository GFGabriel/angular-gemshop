(function(){
  var app = angular.module('store-directives', []);

  app.directive('productDescription', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-description.html'
    }
  })

  app.directive('productReviews', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-reviews.html',
      controller: function(){

        this.review = {}

        this.addReview = function(product) {
          this.review.createdOn = Date.now()
          this.review.rating = 0
          product.reviews.push(this.review)
          this.review = {}
        }

        this.changeRatingUp = function(review) {
          console.log(review)
          review.rating++
        }

        this.changeRatingDown = function(review) {
          console.log(review)
          if (review.rating >= 1) {review.rating--}
        }
      },
      controllerAs: 'reviewCtrl'
    }
  })

  app.directive('productSpecs', function() {
    return {
      restrict: 'A',
      templateUrl: 'product-specs.html'
    }
  })

  app.directive('productTabs', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-tabs.html',
      controller: function(){
        this.tab = 1

        this.setTab = function(selected) {
          this.tab = selected
        }

        this.isSet = function(active) {
          return this.tab === active
        }
      },
      controllerAs: 'tab'
    }
  })

  app.directive('productGallery', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-gallery.html',
      controller: function(){
        this.current = 0

        this.setCurrent = function(selected){

          if (!isNaN(selected)) {
            this.current = selected
          } else {
            this.current = 0
          }
          console.log(this.current)
        }
      },
      controllerAs: 'gallery'
    }
  })

  app.directive('productInfo', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-info.html'
    }
  })

  app.filter('stars', function(){
    return function(number){
      if(number === 1){
        return number + ' Star'
      } else if (isNaN(number)) {
        return
      } else {
        return number + ' Stars'
      }
    }
  })
})();
