function BankAccount(owner, balance) {
    this.owner = owner;
    this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
    console.log(this.balance);
}

BankAccount.prototype.withdraw = function (amount) {
    if (this.balance - amount > 0) {
        this.balance -= amount;
        console.log(this.balance);
    } else {
        console.log("There is not enough");
    }
}

BankAccount.prototype.checkBalance = function () {
    console.log(this.balance);
}

//example run
const myBankAccount = new BankAccount("me", 1000);
myBankAccount.deposit(500);
myBankAccount.withdraw(200);
myBankAccount.checkBalance()