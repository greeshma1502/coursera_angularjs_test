(function(){
'use strict';

    angular.module('shoppingList', [])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyShoppingController(ShoppingListCheckOffService){
        var itemList = this;
        itemList.items =  ShoppingListCheckOffService.listOfItemsTobuy();
        itemList.removeItem = function(itemIndex){
          ShoppingListCheckOffService.pushItem(itemIndex);
          ShoppingListCheckOffService.removeItemFromList(itemIndex);
        }
    }

    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
        var checkOffList = this;
        checkOffList.boughtList = ShoppingListCheckOffService.boughtListItems();
    }

//  <-- Service function -->
    function ShoppingListCheckOffService() {
      var service = this;
      var boughtList = [];
      var items = [];

//     <-- prepopulating items in the itemList -->
        service.listOfItemsTobuy = function(){
        items = [
            {
              name: "Cookies",
              quantity: 10
            },
            {
              name: "Soda",
              quantity: 3
            },
            {
              name: "Pizza",
              quantity: 4
            },
            {
              name: "Chips",
              quantity: 2
            },
            {
              name: "Bagels",
              quantity: 7
            },
          ]
          return items;
        }

//     <-- function to return the boughtList -->
        service.boughtListItems = function() {
          return boughtList;
        }

  //     <-- function to push item in the boughtList -->
        service.pushItem = function(itemIndex){
          boughtList.push(items[itemIndex]);
        }

//     <-- function to remove that item from the itemList -->
        service.removeItemFromList = function(itemIndex){
            var removedItem = items.splice(itemIndex, 1);
        };
     }
})();
