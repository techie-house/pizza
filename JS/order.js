function msg(){
    alert("thank you for engaging with us")
}
function Order(type, size, crust, topping) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}

Order.prototype.fullOrder = function () {
    return this.type + " with the topping of " + this.topping + " and " + this.crust + " as crust.";
};

