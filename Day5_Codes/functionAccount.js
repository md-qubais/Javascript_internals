// class Account {

// constructor
function Account(accountNumber, holdersName, balance) {

    // Fields
    this.accountNumber = accountNumber;
    this.holdersName = holdersName;
    this.balance = balance;
}

// }

// methods
// actually this methods will take lots of memeory
//because it creates prototype points ot another object and that object has constructor ponits to prototype
Account.prototype.withdraw = function (amount) {
    this.balance -= amount;
}

Account.prototype.deposit = function (amount) {
    this.balance += amount;
}

Account.prototype.print = function () {
    console.log('Account number:', this.accountNumber);
    console.log("Holder's Name:", this.holdersName);
    console.log('Account balance:', this.balance);
}


var eich = new Account(1, 'Brendan', 10_000);
eich.deposit(10_000);
eich.withdraw(5_000);
eich.print();
console.log('function Account type is:', typeof Account)