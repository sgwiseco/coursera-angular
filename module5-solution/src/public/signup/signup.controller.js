(function () {
  "use strict";

  angular.module('public')
  .controller('SignupController', SignupController);

  SignupController.$inject = ['MenuService', 'SearchService'];
  function SignupController (MenuService, SearchService) {
    var $ctrl = this;
    $ctrl.user = {};
    $ctrl.Search = false;
    $ctrl.completed = false;

    $ctrl.submit = function() {

      MenuService.getShort($ctrl.user.shortname)
      .then(function(item) {
        $ctrl.user.item = item;
        //console.log($ctrl.user.item);
        SearchService.saveUser($ctrl.user);
        $ctrl.completed = true;
      })
      .catch(function() {
        //console.log("fail");
        $ctrl.Search = true;
      });
    };

    $ctrl.resetFind = function() {
      $ctrl.Search = false;
    };
  }

})();