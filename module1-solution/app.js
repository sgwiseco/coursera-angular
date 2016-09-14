(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.checkinput = "";
  $scope.comments = "";
  $scope.checkMuch = function () {

    var newinput = $scope.checkinput.trim();
    var arrayinput = newinput.split(",");
    if (newinput == "") {
      console.log("Please enter data first");
      $scope.comments ="Please enter data first";
    } else if (arrayinput.length <= 3) {
      console.log("Enjoy!");
      $scope.comments = "Enjoy!";
    } else {
      console.log("Too much!");
      $scope.comments = "Too much!";
    }

  };
}

})();
