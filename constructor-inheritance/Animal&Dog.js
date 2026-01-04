function Animal(name) {
    this.name = name;
    this.speak = function() {
        console.log(`${this.name} makes a sound`);
    }
}

function Dog(name) {
    Animal.call(this, name)
    this.dark = function() {
        console.log(`${this.name} darks`);   
    }
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog

//example run
const myDog = new Dog("Rocky")
myDog.speak();
myDog.dark();


