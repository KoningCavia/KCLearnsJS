'use strict';
// // 132  Functions accepting callback functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`); // name is a baked in property of methods
};

// Here we are passing in a string and a function. See how we are not 'calling' the function (it doesnt end with '()'). we are merely passing it in like a value.
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//first order function
const high5 = function () {
  console.log('👋');
};

//higher order function. (that returns the above first order function.)
//JS uses callbacks ALL the time
document.body.addEventListener('click', high5);
//returns 3 waves. One for each name.
['Harry', 'Pieternella', 'Pomni'].forEach(high5);

//callback functions allow us to  reuse usefull code but more important
// they allow us to create abstraction
// // 131 First class and higher order functions. Like the transformer. we could have given it the code directly, but we have abstracted that away. the transformer doesnt care about what it does. (safety i guess?)

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
