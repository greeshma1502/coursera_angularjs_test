(function(){
'use strict';

  angular.module('lunchCalculator', []).controller('LunchCheckController', function($scope){
      $scope.items = "";
      $scope.output = "";

      $scope.checkIfTooMuch = function(){

          var arrayOfItems = $scope.items;
          console.log(arrayOfItems);

          if (arrayOfItems.length == 0) {
              $scope.output = "Please enter atleast one item!";
          }
          else if (arrayOfItems.length <= 3){
              $scope.output = "Enjoy!";
          }
          else {
              $scope.output = "Too Much!";
          }
          console.log(arrayOfItems.length);
      };
  });
})();
