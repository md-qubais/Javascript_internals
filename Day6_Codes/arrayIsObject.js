const obj = {}
obj[0] = 11;
obj[1] = 23;
obj[5] = 36;
obj[-1] = 'brendan Eich';
obj.boo = 'yeah';
obj['7'] = 5;
obj[true] = false;
// console.log(obj);

// arrays are nothing but an object with special property that is length
const arr = [];
// arr['1'] = 1; || arr['name']=1
// console.log(arr.length)
arr[0] = 11;
arr[1] = 23;
arr[5] = 36;
arr[-1] = 'brendan Eich';
arr.boo = 'yeah';
arr['7'] = 5;
arr[true] = false;
// console.log(arr);
// if the array doesnt container any number in the keys lets say any number in either number format
// or any number either in string format then the length of the array object is 0;

// arr[-1] = 10;
// console.log(arr.length)

// the length property doesnt add any new or doesnt increment itself
// if the index of an array less than 0 or any other type except number

// and if the array is emppty and we did arr[100]=0 it will create 0 to 100 and at 100 it will store some value
// rest all the values are empty undefined


// arr[100] = 1;

// c style for loop
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

// for in index
// it will iterate over all the keys of array
for (let index in arr) {
    // console.log(arr[index])
}

// for of (value of) but iteration starts from the key 0 only numbers key
for (let value of arr) {
    // console.log(value)
}

// forEach it will also iterate over the keys whihc are numbers and which
// are created by the users lets say 0 1 5 created by user
// then this forEach function will iterate only over 0 1 5
arr.forEach((value, index) => {
    console.log(index, ":", value)
})


// 2nd  can be used for objects as well because we are iterating over the keys
// but objects will skip the symbol
let id = Symbol('id');
let user = {
    name: 'john',
    age: 30,
    [id]: 123,
}

console.log('iteration over the object which contains symbol as a key')
for (let i in user) {
    console.log(i)
}
