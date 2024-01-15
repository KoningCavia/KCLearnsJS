'use strict';



// //------------------------------------------------------
// // 134 The call and apply methods

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],

    // new syntax for methods writing. (removes the unnecesary 'function' keyword)
    book(flighNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flighNum}`);
    // adds a string describing the current booking to the bookings array.
    this.bookings.push({flight: `${this.iataCode}${flighNum}`, name})
    },
}

lufthansa.book(239, 'Harry de Barry');
lufthansa.book(667, 'Rooie Rinus');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
    // we want the same method here. Butcopying the method is bad practice.
};

//we store the method lufthanse.book as a new method. this is possible because we have first order functions. cool.
const book = lufthansa.book
// doesnt work, because only the method was copied. so 'this.' doesnt aim at anything.
// book(23, 'Greetje Rachelvoet')



//CALL METHOD

//now with the '.call' method we can add the name of 'this'/the object we want to use.(which doesnt have the method) and then the normal attributed necesarry and the method will work on that object. 
book.call(eurowings, 23, 'Histibe Rachelvoet ');
console.log(eurowings);
//you can see that the booking is now in the eurowings bookings array. and the book method is based on the eurowings attributed.

book.call(lufthansa, 23, 'Peter Snotje');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
}

book.call(swiss, 555, 'Andre Griezel');
console.log(swiss);



// APPLY METHOD

// this is similar to the call method, except it doesnt receive a list of arguments, but it takes an array of arguments.


const flightdata = [555, 'Trudy Griezel'];
book.apply(swiss, flightdata);
console.log(swiss);
// Apply is not used in modern java script, because we have something better now that does the exact same thing,:

// we just use the call method and destructure the array using the spread operator.
book.call(swiss, ...flightdata);

// //------------------------------------------------------
// // 135 The bind method

//just like the call method it allows us to bind a method to an object. the difference with the call method is, bind doesnt immediately call the function. It returns a new function where the 'this.' keyword is bound.

const bookEW = book.bind(eurowings);
const bookLM = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Gull')
console.log(eurowings);     // apparently the method is not logged as part of the object.

// using bind we can also create a function for a specific fligt, by defining arguments/parameters.
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Sjenkie Horgel')  //so we only need to add the name of the passenger :)

const bookEW23Jan = book.bind(eurowings, 23, 'Janneman Robinson'); // Je kunt alle parameters definieren, maar dat is wat overdreven.



// with EVENTLISTENERS

lufthansa.planes = 300; // add new parameter to lufthanse;
lufthansa.buyPlanes = function () {    //add new method
    console.log(this);


    this.planes++;
    console.log(this.planes);
};

// now we add the method to the button (class name = .buy)
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlanes);

//ah, this is wrong. '.this' refers to the button. so the logs are screwy.
// with eventlisteners the 'this' keyword always refers to the element it is bound to. even when the method using the this keyword is part of an object. oh my javascript..
lufthansa.buyPlanes;    // here the this keyword works properly.

//we can fix this by using the bind keyword. Because it returns a new function (even within the eventlisteren). 
// other way of explanating. The first parameter of the'.bind' method is the new '.this' for the function.
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));
// and now it works properly :).



// PARTIAL APPLICATION

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.10, 200));

// now we create a specific addtax method for BTW.
const addVAT = addTax.bind(null, 0.23)  
//even though there is now relevant this keyword for this situation the bind method expects one. So we set it to null.
// const addVAT = value => value + value * 0.23;    // this is the new method we made (hardcoded).

console.log(addVAT(100));
console.log(addVAT(23));

//!!!   Binding basically makes a more specific version of a method from a more general version of that method.   !!!

const addTax2 = function(rate, value) {
    console.log(`taxes are ${value + value*rate}`);
    return function(newRate) {
        // addTax2.bind(null, newRate)

        console.log(`Special added tax = ${value + value*newRate}`);
    }
}

addTax2(0.10, 100)(0.23);

const addTaxRate = function(rate) {
    return function(value) {
        return value + value *rate;
    }
}

const addVAT3 = addTaxRate(0.23)    // returns a method, but with the rate already set.
console.log(addVAT3(100));          // Uses the returned function with the set rate, and new value
console.log(addVAT3(23));




// // ------------------------------------------------------
// // 133  Functions returning functions
// //opposite from last lecture

// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     }
// }

// //the greet method returns a function. Which is stored as 'greeterHey', in this case.
// const greeterHey = greet('Hey');

// greeterHey('Harry');
// greeterHey('Rinus');

// // we can do all of this in one line: 
// //greet('Hello') returns a function. So we can call it simply like this.
// greet('Hello')('Rooie Rinus');

// //What's the point to do this: It has to do with functional programming.


// // rewrite above code as arrow method. pretty hard and weird and unreadable. met chatGPT
// const greetArrow = (greeting) => { return (name) => {console.log(`${greeting} ${name}`)}};

// //All unnecesart boiler code removed
// const greetArrow2 = greeting => name => {console.log(`${greeting} ${name}`)};

// greetArrow('Mai')('BimBam Bino');
// greetArrow2('Halli Hallo')('Kleiner Feigling')

// //------------------------------------------------------
// // 132  Functions accepting callback functions

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`); // name is a baked in property of methods
// };

// // Here we are passing in a string and a function. See how we are not 'calling' the function (it doesnt end with '()'). we are merely passing it in like a value.
// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// //first order function
// const high5 = function () {
//   console.log('👋');
// };

// //higher order function. (that returns the above first order function.)
// //JS uses callbacks ALL the time
// document.body.addEventListener('click', high5);
// //returns 3 waves. One for each name.
// ['Harry', 'Pieternella', 'Pomni'].forEach(high5);

// //callback functions allow us to  reuse usefull code but more important
// // they allow us to create abstraction
// // 131 First class and higher order functions. Like the transformer. we could have given it the code directly, but we have abstracted that away. the transformer doesnt care about what it does. (safety i guess?)





// //------------------------------------------------------
// // 131 firts class functions and higher order functions

//FIRST CLASS FUNCTIONS
// are first class citizens (they are treated as values and this is very special for Javascript). Function are just another type of object and objects are values, so funciton are simply values.
// this means we can store functions as in variables or Object properties.
// we can also pass function as arguments to other functions.
//we can even return functions from other functions
// remember functions are objects. so functions can have methods. which is craaaazy.

//HIGHER ORDER FUNCTIONS
//are functions that either 1: receives a function as an argument, 2:returns a new function or 3: Both.
// this is only possible thanks to first class functions.

//first class functions is just a feature that a languge has or does not hav. All it means is that all function are values. There are no first-class functions in practice. Its just a concept
//there are however higher order functions in practice. Which are possible because the language reports first-class functions.





// //------------------------------------------------------
// // 130 Passing arguments value vs reference

// const flight = 'LH234';
// const Harry = {
//   name: 'Harry Barry',
//   passport: '12987457',
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === '12987457') {
//     alert('Check in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// checkIn(flight, Harry);
// // for some reason flight isnt refactored like i the method. Because it is a primitive value. And primitives, when called, create a copy rather than being referenced
// console.log(flight);
// // but Harry howevef is refactored like in the method. because it refers to the same complex object. This can create unforeseen consequences.
// console.log(Harry);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random) * 10000000000;
// };
// newPassport(Harry);
// checkIn(flight, Harry);






// // // ------------------------------------------------------
// // // 129 Default Parameters
// const bookings = [];

// const createBooking = function (
//   flighNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;

//   const booking = {
//     flighNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// //if we dont specify the third parameter, it calculated thanks to the constructor multiplication. Parameters need to be in proper order though.
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// //skippig the second parameter with undefined.
// createBooking('LH123', undefined, 1000);
