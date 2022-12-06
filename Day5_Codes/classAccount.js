class Account {


    // class can have private fields but constructorfunction dont have private field
    #priv = 10;
    // we cannot access outside the class
    // we can only use this inside the class
    // there is no private method only private field

    #privMethod() {
        console.log('private field will be go to every object')
    }


    // constructor
    constructor(accountNumber, holdersName, balance) {
        // Fields
        this.accountNumber = accountNumber;
        this.holdersName = holdersName;
        this.balance = balance;
    }

    // Methods
    // class methods save memory
    // these methods are automatically go into prototype not to child or mother but to husband
    // we can do new to Account.prototype.withdraw()
    // but cannot do new to account.withdraw() because its not a constructor
    // the special things about the functions we write in class is that we dont use function keyword
    // and if we dont use function keyword while defining a function then its either arrow fucntion or method
    // in this case here it is method acutally aroow function and methods are same
    // here below methods are actually special objects that dont have prototype pointing to another object that has constructor and that constructor is  pointing to object that has prototype
    withdraw(amount) {
        this.balance -= amount;
        this.#priv++;
        console.log(this.#priv)
    }
    deposit(amount) {
        this.balance += amount;
    }
    print() {
        console.log('Account Number is:', this.accountNumber);
        console.log("Holder's Name :", this.holdersName);
        console.log("Account balance :", this.balance);
    }

    // it goes direcly inside the child object
    // if we create lakhs of lambda or arrow functon lakhs will be present in object
    // so dont use arrow function in class and dont use any function in constructor function
    lambda = () => console.log(' i am fat')
}

var marc = new Account(2, 'marc anderson', 20_000);
marc.print();
marc.withdraw();
console.log('class Amount type is:', typeof Account)//actually classes are function itself
// so classes are also functions and function are also functions but a special object which contains some extra field prototype pointing to some another object that object is also special object that contains constructor
