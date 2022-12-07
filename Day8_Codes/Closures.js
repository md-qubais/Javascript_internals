//closure is not a function
// its simply an object with inner functions object

// in nodejs top level variables are not global they are considered local for annonymous function
var haathi = 'mere saathi';
function zoo() {
    // lexical scope is nothing but the functions outer scope
    // start for the lexical scope for inner function cage
    var tiger = 'zinda hai';
    var lion = 'zaroor marega';
    // end of the lexical scope for inner function cage;
    function cage() {
        var rat = 'mera chooha';
        console.log('Tiger', tiger);//closure zoo 
        console.log('haathi', haathi);//closure anonymous
        console.log('rat', rat);//local variable
    }
    return cage;
}
var pinjara = zoo();
pinjara();
console.log()