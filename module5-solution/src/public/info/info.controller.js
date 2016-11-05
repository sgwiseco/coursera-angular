(function () {
  "use strict";

  angular.module('public')
  .controller('InfoController', InfoController);

  InfoController.$inject = ['SearchService', 'ApiPath'];
  function InfoController(SearchService, ApiPath) {
  var $ctrl = this;
  $ctrl.user = SearchService.getUser();
  $ctrl.basePath = ApiPath;
  $ctrl.isReg = SearchService.isReg();
  }

})();