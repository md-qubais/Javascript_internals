// onlu var and function decleration are hoisted not classes
var fn; //in case of function expression with var only the function name is hoisted not the body
console.log(v);//undefined

// var p = new Person();//this is not hoisted will give error cannot access Person before initialization

doSomething();//we can call because fucntion body is hoisted

var v = 5//hoisting or hoisted


function doSomething() {//hoisted
    console.log('do something')
}


fn=function(){} //function expression is not hoisted by variable is hoisted with value undefined


class Person {
    constructor() {

    }
}


// var can be redifined any number of times
var a = 1;
var a = 'abc';
var a = function () { };
var a = {};
