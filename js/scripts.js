const toppingPrices = {
    mushroom: 13,
    onion: 30,
    Pepperoni:
    Extra Cheese

const crustPrices = {
    Classic Crust:
    Thin 'N' Crispy:
    Cheesy Crust:
    Gluten Free Base:

}

$("#order-checkout").on('click',"#btn-deliever_yes",function () {
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