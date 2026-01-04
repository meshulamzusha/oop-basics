class Employee {
    #salary;
    constructor(salary) {
       this.#salary = salary
    }

    getSalary() {
        return this.#salary
    }

    work() {
        console.log("Employee is working");
    }
}


class Manager extends Employee {
    constructor(salary) {
        super(salary)
    }

    work() {
        console.log("Manager is managing");
    }
}

// example rum
const employee = new Employee(4000);
console.log(employee.getSalary()); // 4000
employee.work(); // Employee is working

const manager = new Manager(5000);
console.log(manager.getSalary()); // 5000
manager.work(); // Manager is managing
