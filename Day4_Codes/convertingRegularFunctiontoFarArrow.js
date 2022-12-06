// how to convert regular function into fat arrow function
function sqr(x) {
    return x * x;
}

function sqr(x) { return x * x } //function decleration
var sqr = function (x) { return x * x } //function expression

var sqr = (x) => { return x * x } //lambda expression
var sqr = (x) => x * x //single return remove {return}
var sqr = x => x * x //single param remove ()

// lambda in js are nothing but fat arrow functions

