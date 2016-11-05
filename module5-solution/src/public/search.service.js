(function () {
  "use strict";

  angular.module('public')
  .service('SearchService', SearchService);

  function SearchService() {
    var service = this;
    var data = {};

    service.saveUser = function(user) {
      data = user;

    };


    service.getUser = function() {
      return data;
    };

    service.isReg = function() {
      return Object.keys(data).length > 0;
    };
  }
})();
