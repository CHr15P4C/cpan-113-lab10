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
//adding 3 nonperishable
let apple = new ProductProperties("apple", 2.50, 50);
let bean = new ProductProperties("bean", 0.10, 100);
let steak = new ProductProperties("steak", 60.99, 1);
//2 perishable
let milk = new PerishableProductProperties("milk", 1.50, 10, "2024-12-31");
let egg = new PerishableProductProperties("egg", 0.50, 12, "2025-12-31");

//make a store
let longos = new Store();
//adding the products to the store
longos.addProduct(milk);
longos.addProduct(egg);
longos.addProduct(bean);
longos.addProduct(steak);
longos.addProduct(apple);
//doing the testing
console.log("testing the system now...............................");
//full vlaue
console.log("total longos value: " + longos.getInventoryvalue());
//apply discount
Product.applyDiscount(longos.inventory, 0.15);
//value after discount
console.log("longos value after 15% discount: " + longos.getInventoryvalue());
//test finding existing product and non existing one
console.log("finding apple");
console.log(longos.findProductByName("apple"));
console.log("finding bingus");
console.log(longos.findProductByName("bingus"));

//14th commit
//15th
//16th
//17th
//18th
//19th
//20th
//21