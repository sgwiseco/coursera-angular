(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {
  var service = this;


  service.getAllCategories = function () {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")

      }).then(function(response) {

      var categories = [];
      for (var i = 0; i < response.data.length; i++) {
        categories.push({
            name: response.data[i].name,
            short_name: response.data[i].short_name,
          });
        }
      return categories;
      });

   };

  service.getItemsForCategory = function(categoryShortName) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json?category="),
      params: {
        category: categoryShortName
      }
    }).then(function(response) {
  
      var tempItems = response.data["menu_items"]
      var foundItems = [];

      for (var i = 0; i < tempItems.length; i++) {
        foundItems.push({
            category: response.data.category.name,
            name: tempItems[i].name,
            short_name: tempItems[i].short_name,
            description: tempItems[i].description,
          });
        }
      return foundItems;
    });
  };

  }

})();