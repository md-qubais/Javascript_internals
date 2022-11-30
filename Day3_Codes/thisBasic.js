g = function () {
    console.log(this)
}//function expression but its global 
//this will point to global scope because its not present in object

var gfn = function () {
    console.log(this)
}//function expression butits a local/anonymous
//this will point to global scope because its not present in object

function lfn() {
    console.log(this)
}//normal function decleration
// this will point to global scope because its not present in object

var person = {
    name: "mohammed qubaisuddin",
    age: 23,
    print: function () {
        // here this points to current object
        console.log(this)
    }
}