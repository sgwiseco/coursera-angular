(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['categorylist'];
function CategoriesController(categorylist) {
  var catList = this;

  catList.categories = categorylist;

}

})();