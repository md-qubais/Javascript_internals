function doSomething() {
    console.log('v', v);


    var v = 10;//var is hoisted function socpe of global scope if its inside
    // the if block it will go back untill its get any function or its will get globally var



    // temporal dead zone : ===> that means let is created inside the local memory will have undefined value 
    //created before control is gone to let but cannot access till its decelration thatis knonw as TDZ for let
    // but cannot access it till its decleration
    let w = 20; //  let is not hoisted an gets block scope
    const c = 1;
    // c++; error because const value/ref cannot be changes


    if (1 < 2) {
        var x = 15; //var get new value and not it will be thrown back to function scope back from its block
        let y = 15; //the scope of y is till if block because let has block scope
    }

    console.log(x)//no error will be 15
    // console.log(y)//will give error y is not defined
}

doSomething();