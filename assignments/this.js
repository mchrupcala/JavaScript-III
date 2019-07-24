/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
    // A: Window is the default object that "this" points to. It's the highest-level Object...it's basically everything that Javascript is made of in my browser.


// code example for Window Binding

let myPet = function(name) {
    console.log(this);
    return name;
}
myPet("Gus");
    

// Principle 2
// A: Something like 80% of when I use "this" will be implicit. When I'm constructing an object, "this" refers to the attributes stored inside of the object i'm working within.

// code example for Implicit Binding

let yourPet = {
    name: 'Snoopy',
    age: 7,
    greeting: function(){
        console.log(`${this.name} says Meow!`);
    }
}

yourPet.greeting();



// Principle 3
// A: Used when I'm creating a new object based on a constructor. "this" refers to the new instance of the object...."Mike" in this example.

// code example for New Binding

const Person = function(name, height, hair_color){
    this.name = name;
    this.height = height;
    this.hair_color = hair_color;
};

const mike = new Person('Mike', "5 foot 11 inches", 'dirty blonde');

console.log(mike);



// Principle 4
// A: I'm a little less sure of this one, but it refers directly to the attribute that i want to point at. Often used to invoke a separate function/method. Reminds me of a callback function.

// code example for Explicit Binding

let greeting = function(){
    console.log(`Hey there my name is ${this.name}`)
};

greeting.call(mike);