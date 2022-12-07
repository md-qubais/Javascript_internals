function Account(accountNumber, holdersName, balance) {
    this.accountNumber = accountNumber;
    this.holdersName = holdersName;
    this.balance = balance;
}
Account.count = 0;


Account.prototype.withdraw = function (amount) {
    this.balance -= amount;
}

Account.prototype.deposit = function (amount) {
    this.balance += amount;
}

Account.prototype.print = function () {
    console.log('account number :', this.accountNumber);
    console.log('account holdeer :', this.holdersName);
    console.log('account balance :', this.balance);
}





// new function account that is savings account and is extending the Account constrictor
function SavingsAccount(accountNumber, holdersName, balance) {
    // by this way we can call the parent function constructor
    Account.call(this, accountNumber, holdersName, balance);
    // we will learn call apply bind afterwards
}

SavingsAccount.prototype.withdraw = function (amount) {
    if (this.balance - amount < 500) {
        throw new Error('Insufficient balance');
    }
    // call the parent withdraw function/method
    // by the below way we can call the parent function method/functions
    Account.prototype.withdraw.call(this, amount);

}


// implementing extends in function
//this below line means go attach your __proto__(parent ) to the father
//if anything is not present in the SavingsAccount then it will go and look into its parent Account 
Object.setPrototypeOf(SavingsAccount.prototype, Account.prototype)
//thie below line means go attach your __proto__(parent) to the mother
//if the static variables are not found in the current class that means
//go and check its parent function for eg Account.count then when we do SavingAccount.count if that is not present in SavingAccount.count it will go and look inside its parent static varibale if find it will returns it if not returns undefined
Object.setPrototypeOf(SavingsAccount, Account)

