//BUSINESS LOGIC
var price , crust_price, topping_price ;
let total = 0;
function Getpizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}
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
//Hawaiian Chicken Pizza
function hawaiianPizza(size, crust, topping) {
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.type = "Hawaiian";
}

hawaiianPizza.prototype.description = function () {
    return this.type + ", " + this.size + ", " + this.crust + ", " + this.topping;
}
//Default Pizza Price (Small Pizza)
var pizzaTypePriceF = function () {
    var pizzaTypePrice;
    if (pizzaType === "BBQ Chicken") {
        pizzaTypePrice = 550;
    } else if (pizzaType === "Peri-Peri") {
        pizzaTypePrice = 500;
    } else if (pizzaType === "Tikka") {
        pizzaTypePrice = 600;
    } else if (pizzaType === "Hawaiian") {
        pizzaTypePrice = 500;
    } else if (pizzaType === "Regina Pizza") {
        pizzaTypePrice = 450;
    } else if (pizzaType === "Boerewors") {
        pizzaTypePrice = 650;
    }
    return pizzaTypePrice;
}

//Additional Price Based on Crust
var pizzaCrustPriceF = function () {
    var pizzaCrustPrice;
    if (inputtedCrust == "Classic Crust") {
        pizzaCrustPrice = 5;
    } else if (inputtedCrust === "Thin 'N' Crispy") {
        pizzaCrustPrice = 10;
    } else if (inputtedCrust === "Cheesy Crust") {
        pizzaCrustPrice = 15;
    } else if (inputtedCrust === "Glutten Free Base") {
        pizzaCrustPrice = 20;
    }
    return pizzaCrustPrice;
}

//Additional Price Based on Toppings (Toppings Pricing also relies on Pizza Size)
var pizzaToppingPriceF = function () {
    var pizzaToppingPrice;
    if (inputtedSize === "Large" && inputtedTopping === "Pepperoni") {
        pizzaToppingPrice = 40;
    } else if (inputtedSize === "Large" && inputtedTopping === "Mushrooms") {
        pizzaToppingPrice = 50;
    } else if (inputtedSize === "Large" && inputtedTopping === "Onions") {
        pizzaToppingPrice = 60;
    } else if (inputtedSize === "Large" && inputtedTopping === "Extra Cheese") {
        pizzaToppingPrice = 70;
    } else if (inputtedSize === "Medium" && inputtedTopping === "Pepperoni") {
        pizzaToppingPrice = 30;
    } else if (inputtedSize === "Medium" && inputtedTopping === "Mushrooms") {
        pizzaToppingPrice = 40;
    } else if (inputtedSize === "Medium" && inputtedTopping === "Onions") {
        pizzaToppingPrice = 50;
    } else if (inputtedSize === "Medium" && inputtedTopping === "Extra Cheese") {
        pizzaToppingPrice = 60;
    } else if (inputtedSize === "Small" && inputtedTopping === "Pepperoni") {
        pizzaToppingPrice = 20;
    } else if (inputtedSize === "Small" && inputtedTopping === "Mushrooms") {
        pizzaToppingPrice = 30;
    } else if (inputtedSize === "Small" && inputtedTopping === "Onions") {
        pizzaToppingPrice = 40;
    } else if (inputtedSize === "Small" && inputtedTopping === "Extra Cheese") {
        pizzaToppingPrice = 50;
    }
    return pizzaToppingPrice;
}
$("#order-checkout").on('click',"#btn-deliever_Sure",function () {
    $("#btn-deliever_yes").remove();
    $("#btn-deliever_no").remove();
    var delieveryPrice=150;
    totalPrice+=delieveryPrice;
    $("#delievery-prompt").remove();
    $("#order-checkout").append("<p><strong>Total Amount Payable: "+totalPrice+"</strong></p>")
    $("#order-checkout").append("<button type='button' class='btn btn-dark btn-deliever' id='btn-pay1'>Pay</button>")
    prompt("Enter Your Location (within Nairobi)")
    alert("Your Order Will Be Delievered Upon Payment")
    
})
$("#order-checkout").on('click',"#btn-deliever_no",function () {
    $("#btn-deliever_yes").remove();
    $("#btn-deliever_no").remove();
    $("#delievery-prompt").remove();
    $("#order-checkout").append("<p><strong>Total Amount Payable: "+totalPrice+"</strong></p>")
    $("#order-checkout").append("<button type='button' class='btn btn-dark btn-deliever' id='btn-pay2'>Pay</button>")
})
$(document).ready(function() {
    $("button#submit").click(function(event) {
        event.preventDefault();
        var size = $("#size").val();
        var toppings =$("#toppings").val();
        var crust = $("#crust").val();
        var name = $("#name").val();
        var newPizzaOrder = new order(size,toppings,crust,);
       newPizzaOrder.cost();
       totalCosts.push(newPizzaOrder.price);
          alert(totalCosts)
    });