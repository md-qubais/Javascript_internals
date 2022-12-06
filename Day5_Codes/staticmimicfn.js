function Account(AccountNumber, balance) {
    this.AccountNumber = AccountNumber;
    this.balance = balance
}

Account.withdraw = function () {
    console.log(this.AccountNumber, this.balance)
}


// will return undefined because the function dont know which object to dereference the this
Account.withdraw();