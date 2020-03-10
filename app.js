//Array.reduceRight()
//The reduceRight() method is available on all Arrays. 
//It is an incredibly useful method to understand and it pretty much does what it says. 
//The purpose of the reduceRight method is to "reduce" an array into a single output value. 
//It does this by executing a "reducer" function for each item in an array in reverse order, and allowing you to keep an accumulator that serves as the final reduced value.

const users = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Smith' },
    { firstName: 'Jack', lastName: 'Nimble' },
    { firstName: 'James', lastName: 'Trickington' },
];

console.log(
    users.reduceRight((names, user) => {
        return names.concat(`${user.firstName} ${user.lastName}`);
    }, [])
); // ["James Trickington", "Jack Nimble", "Jane Smith", "John Doe"]

//Array.some()
//The some() method is available on all Arrays. 
//It is used to test whether at least one of items in an array passes a specified test. 
//The test is performed by executing a function that you pass into the some() method for the items in the Array.

const noEvens = [1, 3, 5];
const oneEven = [1, 3, 4, 5];

function isEven(num) {
    console.log(num);

    return num % 2 === 0;
}

console.log(noEvens.some(isEven)); // false
console.log(oneEven.some(isEven)); // true

//What Is Object Oriented Programming
//Object-oriented programming is a methodology used in many different programming languages that is based around data structures (called objects) that contain related data fields (properties) and methods (functions). It is important to note that simply using objects to organize a bunch of unrelated methods/properties is not object-oriented programming.

//There are three main object-oriented concepts that are important to understand when you are programming: encapsulation, composition/inheritance, and polymorphism. We will go into further detail on these three concepts below.

//Encapsulation

/*
class Avatar {
    // Private properties
    energy;
    inventory;

    // Public methods
    move();
    speak();
    sleep();

    // Private methods
    determineState();
}
*/

//Instantiation

let p1 = new Person('Jane', 29);
let p2 = new Person('John', 27);
console.log(p1.name); p1.sayHello();
p2.sayHello();