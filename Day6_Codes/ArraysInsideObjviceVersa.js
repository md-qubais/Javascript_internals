// arrays inside an object
const student = {
    rollNumber: 12145,
    name: "Brendan Eich",
    marks: [35, 78, 99], //arrays inside an object

    // below are the method function they dont have prototype same as lambda function
    // but not exactly lambda because we cant use this inside the lambda
    //we can use this but this wont point to the current object in lambda or fat arrow function
    print() {
        console.log(
            this.rollNumber,
            this.name,
            this.marks[0] + this.marks[1] + this.marks[2]
        )
    }
}

// student.print();

// objects inside array
const expenses = [
    { txn: 200, desc: "Zomato", amount: 540 },
    { txn: 102, desc: "Uber", amount: 600 },
    { txn: 103, desc: "Amazon", amount: 22000 },
]

console.log(expenses)