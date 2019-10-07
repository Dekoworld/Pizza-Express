//BUSINESS LOGIC
var inputtedSize;
var inputtedTopping;
var inputtedCrust;
var pizzaPrice;
var pizzaType;
var pizzaDescription;
var totalPrice = 0;
var checkoutCount = 0;


$("#order-checkout").on('click',"#btn-deliever_yes",function () {
    var delieveryPrice=150;
    totalPrice+=delieveryPrice;
    $("#delievery-prompt").remove();
    $("#order-checkout").append("<p><strong>Total Amount Payable: "+totalPrice+"</strong></p>")
    $("#order-checkout").append("<button type='button' class='btn btn-dark btn-deliever' id='btn-pay1'>Pay</button>")
    prompt("Enter Your Location (within Nairobi)")
    alert("Your Order Will Be Delievered Upon Payment")
    
})

  $(document).ready(function() {
    $("button#submit").click(function(event) {
        event.preventDefault();
        var size = $("#size").val();
        var toppings =$("#toppings").val();
        var crust = $("#crust").val();
        var newPizzaOrder = new order(size,toppings,crust,);
       newPizzaOrder.cost();
       totalCosts.push(newPizzaOrder.price);
          alert(totalCosts)
    });