class Person{
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, i'm ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, school) {
        super(name);
        this.school = school
    }

    study() {
        console.log(`${this.name} is studying at ${this.school}`);
    }
}


//example run
const student = new Student("Alice", "Oxford");
student.greet(); //Hello, i'm Alice
student.study(); //Alice is studying at Oxford