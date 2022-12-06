//pure functions
// functions which neither use nor modify external values
// they donot modify their input parameter neither


// below function is impure function as we are using extranl values
//and also modifying them
let total = 0;
function accumulate(num) {
    total += num;
    return total;
}

// below is Pure Function
// we are neither using any external values nor modifying them
function accumulate(total, num) {
    return total + num;
}


// Higher order function
// functions which take other functions as input and return functions as output

function accumulateExp(total, expObj) {
    return total + expObj.amount
}


const expenses = [
    { txn: 200, desc: "Zomato", amount: 540 },
    { txn: 102, desc: "Uber", amount: 600 },
    { txn: 103, desc: "Amazon", amount: 22000 },
]
const sum = expenses.reduce(accumulateExp, 0);
console.log(sum)


// below is lambda function


// regular function
function sqr(x) {
    return x + x;
}


// lambda function or fat arrow function
var sqr = x => x * x;