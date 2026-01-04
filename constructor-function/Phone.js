function Phone(brand, model) {
    this.brand = brand;
    this.model = model;
    this.details = function() {
        console.log(`Phone: ${this.brand} ${this.model}`);  
    }
}

//example run
const myPhone = new Phone("Samsung", "S22")
myPhone.details()