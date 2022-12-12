// why closures : previously there was no class to remember fields we used to use closures
function Account() {
    // this is known as FIELDS
    var balance = 0;

    // these below are acting as methods
    // now every function contains duplicate reference to its outer lexical scope
    // that function object contains key scope and that scope key is pointing
    // to another dictionary that is closure and there will be several set of closures
    // outer lexical scope closure is one disct
    // and againg its outer lexical scope closure s one dictionary
    // that goes on till the anonymous function
    function deposit(amount) {
        balance += anount;
    }
    function withdraw(amount) {
        balance -= amount
    }
    function print() {
        console.log(balance);
    }
    deposit(1000);
    withdraw(500);
    print();
}

Account();