class Person {
    constructor(id, name) {
        // 1) define property by simple assigning
        // this.id = id;
        // this.name=name

        // 2) define property one by one (but with writable/enumerable/configurable)
        // Object.defineProperty(this, 'id', { value: id, writable: true, enumerable: false });
        // Object.defineProperty(this, 'name', { value: name, writable: true, enumerable: true });

        // 3) define multiple properties in one go
        Object.defineProperties(this, {
            "id": { value: id, writable: true, enumerable: true, configurable: true },
            "name": { value: id, writable: true, enumerable: true, configurable: false },
        })
    }
}


var eich = new Person(1, 'Branden')
// why we cant see the id is because in the 2) type we have define property
// one by one but in that we wrote that writable true that means we can write and change the property of that object
// why we cant see the id is because we have done enumerable false , whatever the property have enumerable false wont will be seen if we try to print the object
console.log(eich);
// and this configurable states that if we can configure the object by usig Object.defineProperty and creating the object anywhere we want if true or not if false
Object.defineProperty(eich, "id", { value: 'id is changed now and wont been seen inside object unless [whatever object].id is calle', writable: true, enumerable: false, configurable: true });
console.log(eich.id)

var obj = {
    name: "mohammed qubaisuddin",
    designation: "software engineer",
}

console.log(obj);//here we can only see name and designation of an object because
// the enumerable is false in key (__proto__ [[Prototype]])

// all the above properties will work if there is constructor function instead of class
