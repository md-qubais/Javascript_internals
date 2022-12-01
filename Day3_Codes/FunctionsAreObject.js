//  function is an object (Along with prototype pair)
// where  'prototype' is point to another dict that is prototype and that prototype contains constructor that is again point back to that particular function


//this is a constructor function
function Employee(id, name) {
    this.id = id;
    this.name = name;

    // do not do this, the function will be in evey child object
    this.print = function () {
        console.log(this.id, this.name);
    }
}


// function object members go to employee
// acting as an static members in another languages
Employee.count = 0;


// Prototype memebers are only added once;
Employee.prototype.baseSalary = 50000;
Employee.prototype.printDetails = function () {
    console.log(this.id, this.name);
}

var eich = new Employee(1, 'brenden')