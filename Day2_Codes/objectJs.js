// Javascript is not class based programming language
// There is no such thing as Class in javascript is just to attract programmers



// JS is prototype Based Object Oriented Programming language
// an object is also a dictionary but some what different and one thins more it contains is 
// [[Prototype]] __proto__
var mohammed = {
    id: 1,
    name: 'mohammed qubaisuddin'
}

console.log(mohammed.id, mohammed.name)//it will print id and name

// the below will return undefined
console.log(mohammed.treasure)//if its not present in the curernt object it will go and check in its parent object
//by default any object is created its parent object is  Object
//it will go and check to its parent by accessing [[Prototype]] __proto__
//and if it is not found the it will return undefined
// and if there is no more parent of that prototype chain lets say Object is the highest most ancestor
// and that object dont have any parent so [[prototype]] __proto__ of object is null


// javascript is dynamic programming lanugage so we can add and property to object and
// also we can delete any type of property of an object

mohammed.age = 23;
console.log(mohammed);//now the mohammed object will also contain age : 23 as property

// we can also delete any property
delete mohammed.id;
console.log(mohammed) //now mohammed object only contains age and name

// null is when we say that if you wanted to find anything but we know what user want to find and we say null if not present
// undefined is when we say that if you wanted to find something but we dont know that whatever you wanted to find



// we cannot delete local variable if we write delete peron we cannot delete it
// we discovered is nothing but a dictionary with some new peropety its a special dictionary