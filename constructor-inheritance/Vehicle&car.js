function Vehicle(type) {
    this.type = type
    this.describe = function() {
        console.log(`This is a ${this.type}`);
    }
}

function Car(type, brand) {
    Vehicle.call(this, type)
    this.brand = brand
    this.info = function() {
        console.log(`This is a ${this.brand} ${this.type}`);   
    }
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car

//example run
const myCar = new Car("car", "BMW")
myCar.describe();
myCar.info();