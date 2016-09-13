(function(){
'use strict';

  angular.module('nameCalculator', []).controller('calcController', function($scope){

      $scope.name = "";
      $scope.totalValue = 0;

      $scope.numericValue = function(){
        var totalNameValue = calculateNumericForString($scope.name);
        $scope.totalValue = totalNameValue;
      };

      function calculateNumericForString(string){
          var totalStringValue = 0;

          for(var i = 0; i < string.length; i++){
              totalStringValue = totalStringValue + string.charCodeAt(i);
          }
          return totalStringValue;
      }

  });
})();
