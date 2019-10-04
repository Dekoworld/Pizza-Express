//BUSINESS LOGIC
var inputtedSize;
var inputtedTopping;
var inputtedCrust;
var pizzaPrice;
var pizzaType;
var pizzaDescription;
var totalPrice = 0;
var checkoutCount = 0;

var bbqCPreferences = [];
var bbqCPrices = [];
var bbqSPreferences = [];
var bbqSPrices = [];

sessionStorageValue1 = [];
sessionStorageValue2 = [];
sessionStorageValue3 = [];
sessionStorageValue4 = [];
sessionStorageValue5 = [];
sessionStorageValue6 = [];
sessionStorageValue7 = [];
sessionStorageValue8 = [];
sessionStorageValue9 = [];
sessionStorageValue10 = [];
sessionStorageValue11 = [];
sessionStorageValue12 = [];

//Create Pizza Objects
//BBQ Chicken Pizza
function bbqChickenPizza(size, crust, topping) {
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.type = "BBQ Chicken";
}

bbqChickenPizza.prototype.description = function () {
    return this.type + ", " + this.size + ", " + this.crust + ", " + this.topping;
}
