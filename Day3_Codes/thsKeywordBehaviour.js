// global function expression
g = function () {
    // as soon as i write this.count
    // in the global area there will be a variable count created
    //and in heap the global dicto will have key: count as value: 0
    this.count = 0;
}//this points to global here inside any function apart from function that is created in object
g()

// function expression
var vfn = function () {
    // this points to global dict and from that global duct we are accessing the count and increasing by one
    this.count++;
}//this points to global here inside any function apart from function that is created in object
vfn()

// normal function declaration
function lfn() {
    // this points to global dict and from that global duct we are accessing the count and increasing by one
    this.count++;
}//this points to global here inside any function apart from function that is created in object
lfn();

var person = {
    name: 'mohammed qubaisuddin',
    age: 23,
    print: function () {
        // incase of object if we are using any this inside the function it will points to current object
        console.log("this points to current object here ", this)
        console.log(count)
    }
}



// person.print();
console.log(count)

// anonymous function === object whose function is anonymouse
// top level code in js file is anonymouse
// this in anonymous is pointing to empty object something different instead of global
// console.log(this)

// so thats why use strict is recommended
// incase of useStrict we can only use this fucntons inside only objects

// if the function execution context is anonymous then we use anywhere this in that
// that is pointing to empty object
// or else if function executon context is any other function and if we dont use (use strict) then it wll point to global dictonary
