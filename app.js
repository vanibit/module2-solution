(function() {
  angular
    .module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);
  ToBuyController.$inject = ["ShoppingListCheckOffService"];
  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];

  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.items = ShoppingListCheckOffService.toBuy;
    toBuy.moveToAlreadyBought = function(itemIndex) {
      ShoppingListCheckOffService.moveToAlreadyBought(itemIndex);
    };
  }

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;
    alreadyBought.items = ShoppingListCheckOffService.alreadyBought;
  }

  function ShoppingListCheckOffService() {
    var service = this;
    service.toBuy = [
        {name: "apples", quantity: 15},
      {name: "cookies", quantity: 12},
      {name: "Milk", quantity: 25},
      {name: "chipse", quantity: 5},
      {name: "Donuts", quantity: 10}
    ];
    service.alreadyBought = [];
    service.moveToAlreadyBought = function(itemIndex) {
      var removedItem = service.toBuy.splice(itemIndex, 1)[0];
      service.alreadyBought.push(removedItem);
    };
  }
})();
