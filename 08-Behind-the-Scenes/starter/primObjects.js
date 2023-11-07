'use strict';

// these are all primitive values, so it works as you would expect. you know.
// primitive types
let lastName = 'Williams';
let oldLastName = lastName;

lastName = 'Davis';
console.log(lastName, oldLastName);

// reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
};
// down here is where two object refer to the same memory adress. (jessica and married jessica)
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// this 1 line below is not possible. We can not change marriedJessica into its own object after we already assigned it a memory adress
// marriedJessica = {};

//This is how you copy an object to a new object with it's own memory adress.
// HowEVER Object.assign creates a shallow copy. If there were an object within the jessica2 object. than jessicaCopy would still refer to this object within jessica2.
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

// Shallow copy in action. (note the family array)
const jessica3 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Appie', 'Harry', 'Rooie Bert'],
};

const jessica3Copy = Object.assign({}, jessica3);
jessica3Copy.lastName = 'Davis';
console.log('Before marriage:', jessica3);
console.log('After marriage:', jessica3Copy);

jessica3Copy.family.push('Huubert');
jessica3Copy.family.push('El Gran Perron');
console.log('Before marriage:', jessica3);
console.log('After marriage:', jessica3Copy);

// Deep Cloning
const text = 'Dit is the moeilijk voor ons. Dit komt later :) ';
