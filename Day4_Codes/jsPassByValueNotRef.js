function passSomething(obj) {
    // chaning the actual obj
    obj.name = 'mohammed imaduddin';
    // if this will be change the actual obj then its pass by reference
    //but its pass by value thats why the main actual object dont have any affect of below line
    obj = { id: 20, name: "shaik raqeebuddin" }
}


var obj = {
    name: 'mohammed qubaisuddin',
    id: 10,
}

passSomething(obj);

console.log(obj);
// so by this we can say that javascript is not pass by refernece
//its pass the reference by value


// the next overrided function will be consider if there are multiple functoios
// function passSomething() {
//     console.log('here')
// }