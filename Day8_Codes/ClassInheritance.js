class Account {
    constructor(accountNumber, holdersName, balance) {
        this.accountNumber = accountNumber;
        this.holdersName = holdersName;
        this.balance = balance;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
    deposit(amount) {
        this.balance += amount;
    }
    print() {
        console.log('account number :', this.accountNumber);
        console.log('account holders name :', this.holdersName);
        console.log('account balance:', this.balance);
    }
}



// class saving extends class account
// that means if i am not allowed to change blue print but i can
// inherit or get the blue print draw same as it is and can perform necessary changes
class SavingsAccount extends Account { //inheritance

    // below is for experimental purpose
    // constructor(id, name, bal) {
    //     super()//super method must be called if we are extending some class
    //     this.id = id;
    //     this.name = name;
    //     this.bal = bal;
    // }


    // if not constructor is called then it will take all the parameters
    // and pass all the parameters to the super constructor


    // overriding
    withdraw(amount) {
        console.log('Saving Account withdraw');
        if (this.balance - amount < 500) {
            throw new Error('Insufficient Balance');
        }

        // call super means its parents withdraw method
        // polymorphism means  ==> 
        super.withdraw(amount);
    }
}

var eich = new Account(1, 'brendan', 5000);
var mohammed = new SavingsAccount(2, 'qubaisuddin', 20000);
eich.print();
// mohammed.withdraw(20000) //will throw error and program execution stops there itself


// prototype chainig if the function is not found then it will go check
// in its parent then its parent object till it find it not found it will give undefined or not found or not a function
// console.log(mohammed.game);
mohammed.withdraw(5000);
mohammed.print();




