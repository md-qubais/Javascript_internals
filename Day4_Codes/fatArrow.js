//what are fat arrow functions

const fun = () => {
    return 'something'
}

fun;
console.log();

// the fat arrow function create an object same as normal function but it dont have
// any prototype thats is the reason if we want computation we must use fat arrow function
// we cannot use new with fat arrow function
// it will directly throw an error
// this behaves differently in arrow function that its accessing the its lexical scoping
// new fun()