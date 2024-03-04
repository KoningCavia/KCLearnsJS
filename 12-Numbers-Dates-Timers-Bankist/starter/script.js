'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions
const displayMovements = function(movements, sort = false) {    // by default sorting is false
  containerMovements.innerHTML = '';      // className.innerhtml = '' sets the html to a string ''

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  
  movs.forEach(function(mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
  
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}t</div>
        <div class="movements__value">${mov}</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
  };


  //154 REDUCE METHOD
const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  // acc.balance = balance;
  labelBalance.textContent = `${acc.balance}€`;
}

//155 chaining method
const calcDisplaySummary= function(acc) {
  const incomes = acc.movements
    .filter(mov=>mov>0)
    .reduce((acc, mov) => acc+mov,0 )
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov=>mov<0)
    .reduce((acc, mov) => acc+mov,0 )
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov=>mov>0)
    .map(deposit=> deposit*acc.interestRate/100)
    .filter((int, i, arr) => {      // add filter that only adds interest thats higher than 1
      return int >= 1;
    })
    .reduce((acc, int) => acc+int,0);

  labelSumInterest.textContent = `${interest}`;

}

  const creatUsernames = function(accs) {
    //use for each. because we dont want to create a new array. we want to modify the array we get.
    // we are making use of the 'sideeffects' that a forEach loop provides (and map doesn't);
     accs.forEach(function(acc) {
      acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
     });
 };
 creatUsernames(accounts);

 const updateUI = function(acc) {
  displayMovements(acc.movements); 
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
 }

// 159 Implementing login

console.log('-----159 Implementing login-----');

//LOGIN LOGIC
let currentAccount;     // here we initiate the empty variable (because we need it for certain functions). and in the login we assign a value to it.

btnLogin.addEventListener('click', function(e) {
  e.preventDefault();  // this is a button in a form element. and standard behavior is for the page to reload. preventDefault prevents this.
  // console.log('LOGIN');

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);   // here we assign the value
  console.log(currentAccount);

  if(currentAccount?.pin === +(inputLoginPin.value)) {
    console.log('LOGIN'); // Optional chaining baby!! does account exist?
  
    //display ui and welcome message

    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // clear nput fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();   // makes the inputfield lose its focus

    updateUI(currentAccount);
  }
})

//160 TRANSFER METHOD
btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();   // this is common to do when working with forms

  //get the entered values 
  const amount = +(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);  // We retrieve the account which has the username which is the same as the name entered in the text field.
  console.log(amount, receiverAcc);


  //validate input
    if(amount >0 && 
      receiverAcc &&
      currentAccount.balance >= amount && 
      receiverAcc?.username !== currentAccount.username) {
        console.log('Transfer valid');

        //clean inputfields
        inputTransferAmount.value = inputTransferTo.value = '';

        //add negative movement to current user
        //add positive movement to recipient
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        //update UI


        updateUI(currentAccount);
    }
})

// 162 Some

btnLoan.addEventListener('click', function(e){
  e.preventDefault();

  const amount = +(inputLoanAmount.value)

  if(amount >0 && currentAccount.movements.some(mov => mov >= amount*0.1))

  //add movements
  currentAccount.movements.push(amount);

  // update ui
  updateUI(currentAccount);
  inputLoanAmount.value = '';
})

//161 CLOSE ACCOUNT
console.log('-----161 the findIndex method-----');
btnClose.addEventListener('click', function(e) {
  e.preventDefault();
  // console.log('Delete');

  const closeAccount = inputCloseUsername.value;
  const closePin = inputClosePin.value;
  //Correct credentials? is currentuser the same as the 

  inputCloseUsername.value = inputClosePin.value = '';
  if(currentAccount.username === closeAccount && +(currentAccount.pin) === +(closePin)) {
    const index = accounts.findIndex(acc =>         // this works exactly like the find method. except it 
      acc.username === currentAccount.username      //returns the index of the value rather than the value itself 
      )                  
    //Delete user from Data
    accounts.splice(index, 1);
    console.log('Delete Valid');
  
    // Hide UI / "Logout"
    containerApp.style.opacity = 0;
  }
})

let sorted = false;        // hier maken we de staat van de boolean
btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);    // hier sturen we de tegenovergestelde staat van de boolean met de method call mee
  sorted = !sorted;                                       // hier slaan we de tegenovergesteld staat van de boolean op in "sorted"
})



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES



//171 CONVERTING AND CHECKING NUMBERS
console.log(`-----171 CONVERTING AND CHECKING NUMBERS-----`);



//in js all numbers are represented as floating point numbers.
// this is why we have one
console.log(23===23.0);   //returns true

//Base 10 - 0 to 9
//Binary base 2 - 0 to 1
console.log(0.1+0.2);   //returns a weird fraction.. This is because 'Base2' has rounding problem for .1 similar to 10/3=3.33333 for Base10.

// JS is NOT suitable for science or financial for this reason.

console.log(Number(`23`));    // turn string to number
console.log(+'23');           // this is a trick to turn a string of numbers into a number.

//the Number. object has a method (it is a function but in js functions are objects)
//so if a function is an object. it can have its own methods. So functions can have functions (methods) 
console.log(Number.parseInt('30px')); // js does its best to extract a number from any string. The string MUST start with a number though.

//pareInt takes a second argument: the Base of the number (Base2 or Base10)
console.log(parseInt('30px', 10));    //Work with B10
console.log(parseInt('30px', 2));     //BAse2

console.log(Number.parseFloat(`2.5rem`));   //returns a floating point number
console.log(Number.parseInt(`2.5rem`));    // only returns int (==2) 

console.log(Number.parseInt(`   2.5rem    `));  //white space doesnt matter  

// to check if anything is a number or not. (false if it IS a number, true if anything else)
console.log(Number.isNaN(20));      //false 
console.log(Number.isNaN('20'));    //true
console.log(Number.isNaN(+'20x'));  //false its a number
console.log(Number.isNaN(23/0));    //infinity is a number..
console.log(23/0);

//isFinite is better than isNaN
console.log(Number.isFinite(20));     // isFinite check both is it a number and is it infinite. So its a better isNaN.
console.log(Number.isFinite('albert'));
console.log(Number.isFinite(23/0)); 

console.log(Number.isInteger(20));    //true
console.log(Number.isInteger(23.0));  //true
console.log(Number.isInteger(23/0));  //false


//172 MATH AND ROUNDING
console.log('-----172 MATH AND ROUNDING-----');

console.log(Math.sqrt(25)); //wortel trekken met Math function
console.log(25**(1/2));     // worteltrekken met symbolen (25^(1/2)
console.log(8**(1/3));      // cubic root. 

console.log(Math.max(5,18,'23',11,2));      //max automatically transforms strings 
console.log(Math.max(5,'18px','23',11,2));    //does automatically parses  stringsthough
console.log(Math.min(5,18,'23',11,2));      //min method

console.log(Math.PI*parseFloat('10px') **2);  // using pi to calculate the radius of a 10 px circle

console.log(Math.trunc(Math.random()*6)+1);

const randomInt = (min, max) => Math.trunc(Math.random() * (max-min)+1)+min;  //around t=6:20 it is explained mathematically why this function results in a random value between a given min and max value (rather than zero and some value).
console.log(randomInt(10,20));

//Rounding integers
console.log(Math.trunc(23.3));  //removes any decimal part.

console.log(Math.round(23.3));  //will always round to the nearest integer
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));   // will always round up
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));  // will always round down
console.log(Math.floor(23.9));
//floor and trunc do the same thing ONLY when working with positive numbers.
//ceil and trunc do the same when working with engative numbers.
//So floor and ceil are generally better


//Rounding decimals
//toFixed will return a string rather than a number (strings = white in console, number = purple)
console.log((2.7).toFixed(0));    // zero nummers achter de komma
console.log((2.7).toFixed(3));    //3 decimal points