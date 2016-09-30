(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&',
	  noFound: '<'
    },

  };

  return ddo;
}



NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  
  menu.searchTerm = "";
  menu.found = [];
  menu.noThing = false;
  


  // menu.logMenuItems = function (shortName) {
    // var promise = MenuCategoriesService.getMenuForCategory(shortName);

    // promise.then(function (response) {
      // console.log(response.data);
    // })
    // .catch(function (error) {
      // console.log(error);
    // })
  // };
  
  menu.searchItem = function () {
    if (menu.searchTerm.trim().length == 0) {
		menu.found = [];
        menu.noThing = true;
	}
	else {
         var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);

         promise.then(function (response) {

	       menu.found = response;
	       menu.noThing = false;
	       if (menu.found.length == 0){
             menu.noThing = true;
           }

         })
         .catch(function (error) {
         console.log("Something went terribly wrong.");
         });		
	}

  };
  menu.removeItem = function(index){
      menu.found.splice(index, 1);
    };

}


MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;


  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")

      }).then(function (result) {
      // process result and only keep items that match
        var tempfoundItems = result.data["menu_items"]
        var foundItems = [];
		
		for (var i = 0; i < tempfoundItems.length; i++) {
          var desc = tempfoundItems[i].description;
          if (desc.toLowerCase().indexOf(searchTerm) !== -1) {
            foundItems.push(tempfoundItems[i]);
          }
        }
		

      return foundItems;
    });

   };

  }

})();
