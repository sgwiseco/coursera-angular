(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var buyList = this;

  buyList.items = ShoppingListCheckOffService.getbuyItems();

  
  buyList.removeItem = function (itemIndex) {


	  ShoppingListCheckOffService.removeItem(itemIndex);
	
  };
}


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items =  ShoppingListCheckOffService.getboughtItems();
 
 
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items 

  var toBuyItems = [{name: "cookies", quantity: 10}, {name: "milks", quantity: 3}, 
                    {name: "oranges", quantity: 5}, {name: "cakes", quantity: 2},
					{name: "bread", quantity: 1}];
  var boughtItems = [];
  // service.addItem = function (itemName, quantity) {
  
    // var item = {
      // name: itemName,
      // quantity: quantity
    // };
    // items.push(item);
  // };

  service.removeItem = function (itemIdex) {

     var item1 =[];
	 item1 = toBuyItems.splice(itemIdex, 1);
	 var item = {
      name: item1[0].name,
      quantity: item1[0].quantity
    };
	
    boughtItems.push(item);
   
	if (toBuyItems.length == 0) {throw new Error("Everything is bought!");}

  };


  service.getboughtItems = function () {

    return boughtItems;
  };
  

  service.getbuyItems = function () {

    return toBuyItems;
  };
}

})();