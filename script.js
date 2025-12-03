//create a base class product properties with name price and quantity

class ProductProperties {
    //constructor method
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    //other methods
    getTotalValue() {
        return (this.price*this.quantity);
    }
    toString() {
        return ("Product: " + this.name + ", Price: ", + this.price + ",Quantity: " + this.quantity);
    }
}