// more on objects
// a=10, integer literal
// name = 'mohammed qubaisuddin' string literal
// obj={} same we have with the objects that is object literal
var eich = {}//empty object (empty special dictionary)
console.log(eich);

// noramally we can create hashtables or dict using dict['key']=value;
eich['id'] = 1;//hashtable notation
eich.id = 1;//js object property notation
// choose whatever you want

// eich.401=12345 cannot be possible violating the basic programming rule
eich['401'] = 12345;

eich['en-us'] = 'English';
// eich.en-us = 'English'; cannot possible violating the basic progamming grammer rule

var obj = { a: 10, b: 20 };
eich[obj] = 'something' //whatever we pass in this hastable notation to add property
//in the object it will try to add toString on that particular thing
// toString for any object is [object Object]
console.log(eich);


var me = { id: 10, name: "qubais", id: 20, name: "mohammed qubaisuddin" };
// we can also override the key by using the above method


function fun() {
    // this is the comment of the function fun
    console.log('this is the function fun');
}

// so we try to add the fun as its key value with the help of hastable object creation notation
eich[fun] = 'this is the function'
console.log(eich)//that measn eich[fun] it will try to convert fun to toString() that returns the entire function in the form of string including comments and ; eveything whatever you wrote inside the function and 
//all function will be converted nto string and add as a key and value will be this is a function



