const array = [1, 2, 3];

// 1 behaving like an array 
console.log(array[0]);
array[0] = 5;
console.log(array[0]);

// 2 linkedlist/stack (LIFO) 
array.push(9);//adding element at the end of the array
console.log('push(9)', array);

var result = array.pop();//removing element from the end of the array
console.log('pop() result', result);
console.log(array);

// Queue (FIFO) 
array.unshift(8);//adding the element in the front of the array
console.log('unshift(8)', array);
var result = array.pop();
console.log(array);

// Double ended queue
var result = array.shift();//removing the element from the front of an array
console.log('shift()', result);
console.log(array);



function find5(elememt) {
    return elememt == 5;
}
// find is a HOF higher order function (passing function to it)
// this is known as functional programming or declarative programming
var result = array.find(find5);
var result = array.find(function (element) {
    return element === 5;
})
var result = array.find((element) => {
    return element == 5;
})
var result = array.find(element => element == 5);
console.log(result);


// functional methods of array;
var result = array.findIndex(element => element = 5);
console.log(result);


// not functional old style imperative to find element 5
for (let i = 0; i < array.length; i++) {
    if (array[i] == 5) {
        console.log(i);
        break;
    }
}