'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// // 144 SIMPLE ARRAY METHODS

const arr = [23, 11, 64];
console.log(arr[0]);    //shows index 0 or array (duh)
console.log(arr.at(0));   //does the same but with a method.
// But why?

// suppose we dont know the end of the array. We would do this:
console.log(arr[arr.length-1]);   //returns last value of the array
console.log(arr.slice(-1)[0]);       // returns last value of the array (without brackets it returns an array with one value. with brackets just the value)

//these are two classical methods to get the last value.
// however the at method makes this easier
console.log(arr.at(-1));
console.log(arr.at(-2));
//we dont need '-1', we dont need an extra [0]. we can just say -1 and it returns the value.

// which should you use? it depends. But you probably want the .at method. Also for method chaining.

console.log('Harry'.at(0));   // also works with strings (which are arrays.)


console.log('\n\n\n\b');

// // 143 SIMPLE ARRAY METHODS

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];



// //Arays are objects that have their own set of methods that act as tools to deal with arrays


// let arr = ['a', 'b', 'c', 'd', 'e'];

// //SLICE  (just like in strings)     (no mutates)
// console.log(arr.slice(2))       // slices AFTER 2 (so 3 and after is included, but not 2)
// console.log(arr.slice(2, 4))    // slices BEFORE 4 (so 4 and before is included)

// console.log(arr.slice(-2));     // takes the last 2 elements of an array
// console.log(arr.slice(-1));     // gets the last element this is very handy, remember this.
// console.log(arr.slice(1, -2));  // gets everything except the first 1 and the last 2.
// console.log(arr.slice);         // creates a shallow copy.
// console.log([...arr]);      //also creates a shallow copy.

// //SPLICE  (mutates)
//   console.log("\n\n\n\n\SPLICING");
//   console.log(arr.splice(2));   //result seems the same, however look at the original array
//   arr.splice(-1)
//   console.log(arr);             // the spliced values are REMOVED from the ORIGINAL array.
//   //most of the time the removed part that we spliced (the first) doesnt interest us. This is generally used to remove data from the original aray.


// // Splicing parameters work differently from slice. Here splicing starts after 1, but then only the next 2 values are spliced. so specifically only value 2 and 3 are removed.
// arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.splice(1,2))
// console.log(arr)            // and everything BUT 2 and 3 are still in the original array.


// // REVERS   (mutates)
// console.log("\n\n\nREVERSE");

// arr = ['a', 'b', 'c', 'd', 'e'];
// let arr2 = ['j','i','h','g','f'];
// console.log(arr2.reverse());      // dont forget the '()'
// console.log(arr2);      // reverse does mutate the array. The original array stays reversed.

// // CONCAT   (NO mutate)
// console.log('\n\n\nCONCAT');
// const letters = arr.concat(arr2);     // concats arrays // (NO mutate)
// console.log(letters);     
// console.log([...arr, ...arr2]);       // does the same as concat.  (NO mutate)


// // JOIN
// console.log('\n\n\nJOIN');

// //Works just like letters
// console.log(letters.join(' - '));   // joins all the letters in the array with a dash.

// // remember also we know
// // : push unshift pop shift indexOf and includes


/////////////////////////////////////////////////
