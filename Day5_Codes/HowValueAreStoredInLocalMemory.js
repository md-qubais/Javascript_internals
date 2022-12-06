// when the function stack frame or function execution context
// how the local variables are stored
// lets say let a= 10 they are simply not stored in a dictionary which is just point to value
// they are stored in such a way that the value a is point to another dictionary
// which points to another object and that object contains a dictionary that is known as
// Property Descriptors contains four 4 key value pair
// value ====> 10;
// writable ===>true
// enumerable ===>true;
//configurable ===>false;
// by default it will work in the above way