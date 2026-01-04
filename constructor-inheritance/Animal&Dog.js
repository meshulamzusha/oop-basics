function Animal(name) {
    this.name = name;
    this.speak = function () {
        console.log(`${this.name} makes a sound`);
    }
}

function Dog(name) {
    Animal.call(this, name)
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog
Dog.prototype.dark = function () {
    console.log(`${this.name} darks`);
}

//example run
const myDog = new Dog("Rocky")
myDog.speak();
myDog.dark();


