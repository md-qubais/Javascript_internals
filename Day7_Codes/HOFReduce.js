const arr = [1, 2, 3, 4, 5];


// reduce function in array takes a function callback function
// and it reduces the array value to one value and returns it
console.log(arr.reduce((total, element) => {
    // console.log(total, element)
    return total + element;
}))

//now i am asking reduce function to start with some value
// that means whatever will be the second parameter of that callback function
// will be the first parameter and second parameter will be the elements one by one
// and whatever we return that seoncd parameter will hold that value of callback
// and every iteration that updated value will be pass as the first parameter and second parameter will be the array elements one by one
console.log(arr.reduce((total, amount) => {
    console.log(total, amount);
    return total + amount;
}, 0))