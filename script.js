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

//adding 2 more of non expiring

let bean = new ProductProperties("bean", 0.10, 100);
let steak = new ProductProperties("steak", 60.99, 1);

console.log(bean.toString());
console.log(bean.getTotalValue());

console.log(steak.toString());
console.log(steak.getTotalValue());

//static methods and properties
//class product

class Product {
    static applyDiscount(products, discount){

        for (const product of products){
            product.price = product.price * (1-discount);
        }
    }
}

//this is confusing without having created a store class first to test with smh

//store class

class Store {
    constructor() {
        this.inventory = new Array();
    } 

    addProduct(product) {
         this.inventory.push(product);//haha pushing p
    }

    getInventoryvalue() {
        let total = 0;
        for (const product of this.inventory) {            
             total += product.getTotalValue();
        }
        return total;
    }

    findProductByName(nameIn) {
        for (const product of this.inventory) {
            if (product.name == nameIn) {
                
                return product.toString();
            } 
        }
    }
}

////testing time

//make a story

let longos = new Store();

longos.addProduct(milk);
longos.addProduct(egg);
longos.addProduct(bean);
longos.addProduct(steak);
longos.addProduct(apple);

console.log("testing the system now...............................");



console.log("total longos value: " + longos.getInventoryvalue());

Product.applyDiscount(longos.inventory, 0.15);

console.log("longos value after 15% discount: " + longos.getInventoryvalue());

console.log("finding apple");

console.log(longos.findProductByName("apple"));

console.log("finding bingus");

console.log(longos.findProductByName("bingus"));