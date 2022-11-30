//boolean
var isDone = true;
console.log(isDone, typeof isDone);

// number
var pi = 1.223345345345345345345345435345; //any number either float or normal number are stored in the form of IEEE7
// there is no non floating number in js becuase it follows IEEE format to store the number
console.log(pi, typeof pi);

//string (Unicode) we can use emojis and another languages as well Unicode
var name = "Mohammed Qubaisuddin 😀 ";
console.log(name, typeof name)

// null is not just a value but also a datatype
var head = null;
console.log(head, typeof null); //this was a mistake in javascript

// undefined is not just a value but also a datatype
var person = undefined
console.log(person, typeof person) //this was also a mistake

// bigInt can store bigger Integer value
var elonMusk = 12323423234234234234234234234234234234324234234n;  //make sure to add n at the end for bigInt
// these are stored in the form of character by character.
console.log(elonMusk, typeof elonMusk)

// Symbol
var s1 = Symbol();
var s2 = Symbol();
console.log(s1, s2, typeof s1, typeof s2, s1 == s2)//gives us a unique identifier
//can be used for unique key





// how the integers/number are store in js

