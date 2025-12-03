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
         
        return "Product: " + this.name + ", Price: " + this.price + ", Quantity: " + this.quantity;
    }
}

//object to test

let apple = new ProductProperties("apple", 2.50, 50);

console.log(apple.getTotalValue());
console.log(apple.toString());


//adding sub class perishable product

class PerishableProductProperties extends ProductProperties {
    //extending constructor from super class
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }
    //overiding method from superclass
    toString() {
        return "Product: " + this.name + ", Price: " + this.price + ", Quantity: " + this.quantity + ", Expiration Date: " + this.expirationDate;
    }

}

//creating two methods to test

let milk = new PerishableProductProperties("milk", 1.50, 10, "2024-12-31");

console.log(milk.toString());
console.log(milk.getTotalValue());

//creating another object since specified 2 minimum of child class

let egg = new PerishableProductProperties("egg", 0.50, 12, "2025-12-31");

console.log(egg.toString());
console.log(egg.getTotalValue());