//this is just a computed function should not invoke with new oeprator/keyword
function add(a, b) {
    // new.target returns true if it was invoked by new operator/keyword
    if (new.target) {
        throw Error('dont invoke this function with new operator/keyword')
    }
    return a + b;
}

console.log(add(10, 20))
// var adder = new add(10, 20)

// Object based function , constructor function
// what happens if we dont invoke constructor function with new keyword
function Employee(id, name) {
    if (!new.target) {
        throw Error('please invoke Employee constructor function with new keyword')
    }
    // if we dont invoke Employee constructor function with new keywork
    // then this.id this.name and this.details will start pointing to global
    this.id = id;
    this.name = name;
    this.details = function () {
        console.log('Ewww.. Wastefull method declare anyfunction on Mother object');
    }
}


// Employee(10, 'mohammed qubasuddin');
var employee = new Employee(10, 'mohammed qubaisuddin')