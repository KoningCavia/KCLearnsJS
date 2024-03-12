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
    '2023-03-04T17:17:47.999Z',
    '2023-03-06T23:01:01.667Z',
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

const formatMovementDate = function(date, locale) {
  const calcDaysPassed = (date1, date2) => 
  Math.round(Math.abs((date2-date1)/(1000*60*60*24)));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);
  if(daysPassed === 0) return 'Today';
  if(daysPassed === 1) return 'Yesterday';
  if(daysPassed <= 7) return `${daysPassed} days ago`;
 
  else {

  // const day = `${date.getDate()}`.padStart(2,0);      // EXTRACT THE INFO
  // const month = `${date.getMonth()+1}`.padStart(2,0);  
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`; // 

  return new Intl.DateTimeFormat(locale).format(date);
};
}

const formatCur = function(value, locale, curr) {
  return new Intl.NumberFormat(locale, 
    {
      style: 'currency',    // add curency sign
      currency: curr}).    // in US style
      format(value);          // apply it to this value.
  
  }




const displayMovements = function(acc, sort = false) {    // by default sorting is false
  containerMovements.innerHTML = '';      // className.innerhtml = '' sets the html to a string ''

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;
  
  movs.forEach(function(mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);    // we use the movements index to find the right date.
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMovement = formatCur(mov, acc.locale, acc.currency)
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}t</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMovement}</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
  };





  //154 REDUCE METHOD
const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  
  labelBalance.textContent = `${formatCur(acc.balance, acc.locale, acc.currency)}€`;
}

//155 chaining method
const calcDisplaySummary= function(acc) {
  const incomes = acc.movements
    .filter(mov=>mov>0)
    .reduce((acc, mov) => acc+mov,0 )
  labelSumIn.textContent = `${formatCur(incomes, acc.locale, acc.currency)}€`;

  const out = acc.movements
    .filter(mov=>mov<0)
    .reduce((acc, mov) => acc+mov,0 )
  labelSumOut.textContent = `${formatCur(Math.abs(out), acc.locale, acc.currency)}€`;

  const interest = acc.movements
    .filter(mov=>mov>0)
    .map(deposit=> deposit*acc.interestRate/100)
    .filter((int, i, arr) => {      // add filter that only adds interest thats higher than 1
      return int >= 1;
    })
    .reduce((acc, int) => acc+int,0);

  labelSumInterest.textContent = `${formatCur(interest, acc.locale, acc.currency)}€`;

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
  displayMovements(acc); 
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
 }

// 159 Implementing login

console.log('-----159 Implementing login-----');

//LOGIN LOGIC
let currentAccount;     // here we initiate the empty variable (because we need it for certain functions). and in the login we assign a value to it.

// FAKE ALWAYS LOGGED IN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity=100;






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

    //Create current date and time
    const now = new Date();
    const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'long',     //numeric gives month number, long gives the months name
    year: 'numeric',       //numeric 2-digit
    // weekday: 'long'
  }

  // const locale = navigator.language;    // returns the location according to your browser
  // console.log(locale);    
  labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);
    // const day = `${now.getDate()}`.padStart(2,0);       // pad to two positionsat the starting side (left). Fill with '0'.
    // const month = `${now.getMonth()+1}`.padStart(2,0);  
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2,0);
    // const min = `${now.getMinutes()}`.padStart(2,0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

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

        // add movement dates to both accounts
        currentAccount.movementsDates.push(new Date().toISOString());
        receiverAcc.movementsDates.push(new Date().toISOString());

        //update UI


        updateUI(currentAccount);
    }
})

// 162 Some

btnLoan.addEventListener('click', function(e){
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value)    //floor rounds it down to 'hele euros'.

  if(amount >0 && currentAccount.movements.some(mov => mov >= amount*0.1))

  //add movements
  currentAccount.movements.push(amount);
  // add movementDate
  currentAccount.movementsDates.push(new Date().toISOString())

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
  displayMovements(currentAccount, !sorted);    // hier sturen we de tegenovergestelde staat van de boolean met de method call mee
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
console.log((2.345).toFixed(2));  //so this effectively removes 1 decimal point
console.log(+(2.345).toFixed(3));   // the + signs makes this method return a number.

//now lets apply some of this to the bankist app.



// 173 THE REMAINDER OPERATOR
console.log(`-----172 THE REMAINDER OPERATOR-----`);

//every time you need to do something every Nth time. Use the remainder operator.

console.log(5 % 2);
console.log(5 / 2);   // 5 = 2 * 2 + 1

console.log(8 % 3);
console.log(8 / 3);   // 8 = 2 * 3 + 2

console.log(6&2);   // answer = 0 6/2 = 3
console.log(7%2);   // answer = 1 (3*2 = 6 and 1 is the remainder)

const isEven = n => n % 2 === 0;

console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));


labelBalance.addEventListener('click',function() {
[...document.querySelectorAll('.movements__row')].
forEach(function(row, i){
  if(i % 2===0) row.style.backgroundColor = 'orangered';
  if(i % 3===0) row.style.backgroundColor = 'blue'
  });
})


// 174 NUMERIC SEPARATORS
console.log(`-----174 NUMERIC SEPARATORS-----`);

// 287.460.000.000
const diameterBad = 287460000000  // hard to read actuall value
const diameter = 287_460_000_000  // js doesnt allow for .'s but does allow for _'s.
console.log(diameter);            

const price = 345_99;    // typical price in cents
console.log(price);      

const transferFee1 = 15_00;
const transferFee2 = 1_500;
//both are the exact same number. But we perceive the first as 15 euro (1500 cents). and the second as 1.500 (1500)
console.log(transferFee1);
console.log(transferFee2);

const PI = 3.14_15;   //doesnt make sense BUT the number will be shown perfectly fine.
// const PI2 = 3._1415;    // This is NOT allowed
console.log(PI);        

console.log(Number('230000'));
console.log(Number('230_000'));   // this doesnt work. Putting an _ in a string

// 175 WORKING WITH BIGINT
console.log("-----175 WORKING WITH BIGINT-----");

console.log(2**53-1);     // this is the biggets number javascript can deal with.
console.log(Number.MAX_SAFE_INTEGER);   // This biggest number even has its own Number method.

console.log(2**53+1);         // these numbers return VERRY inconcistent results
console.log(2**53+2);
console.log(2**53+3);
console.log(2**53+4);


console.log(45846454322356845323058351531218755);     // this number will be imprecise
console.log(45846454322356845323058351531218755n);     // if we add an 'n' this number is suddenly a BIGINT!
console.log(BigInt(45846454322356845323058351531218755));   // apparently also doesnt work..?

//Operations
console.log(10000n+10000n);         // adding bigint with bigint
console.log(15834893498248192389234400818222n*1000n);     // multiplying bigint with bigint
// console.log(Math.sqrt(16n));      // doesnt work because bigint isnt really a number per se

const huge = 23439831925893894902923n;
const num = 23;
// console.log(huge*num);        // gives an erro (canot mix bigint and other types)
console.log(huge*BigInt(num));    // this is where we use bigInt (to change a normal int to a                               bigint so you can perform operations with other bigints.)

console.log((20n>15));      // this will work
console.log(20n === 20);    // is false. === doesnt do type coercion.
console.log(typeof 20n);
console.log(20n == 20);     // is true because == does do corecion

console.log(huge+ ' is really big');      // the bigint it converted to a string


// Divisions
console.log(11n/3n);      // it will round down the fraction to the nearest int (BIGINT doesnt do fractions) WAIT is this the inverse from 11%3?
console.log(10/3);

console.log(11n/3n);
console.log(11%3);



// 176 CREATING DATES
console.log('-----176 CREATING DATES-----');



//create a date
// there are 4 ways

// //1
// const now = new Date;   // current date and time
// console.log(now);

// //2 parsing from a data string
// console.log(new Date('Mar 06 2024 16:25:37'));
// console.log(new Date('24 December, 2024'));  // Dit is een slimme parses. Ik heb dit gewoon zo opgeschrreven en js begreep het gewoon! 

// const date2 = new Date(account1.movementsDates[0]);
// console.log(date2);

// console.log(new Date(2037, 10, 19, 15, 23, 5));
//                   //yr, mont, day, hr, min, sec

// //note that month is zero based. 10 here is november

// //november only has 30 days. What happend if we enter november 31st?
// console.log(new DataTransfer(2037, 10, 31));
// //it autocorrects to december first .(november 35 would make december 5th).

// // if you enter one number it will count that as milliseconds since unix time (1 januari 1970)
// console.log(new Date(0));
// console.log(new Date(3*24*60*60*1000));  //3 days in millisecs after unix time

// console.log(3*24*60*60*1000); // 

//working with dates4
const future = new Date(2037, 10, 19, 15, 23);
console.log(future.getFullYear());
console.log(future.getMonth()); 
console.log(future.getDate());  // gets number of the month
console.log(future.getDay());   // gets day of the week
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getMilliseconds());
console.log(future.toISOString());  //turns date in string following international standard
console.log(future.getTime());    // returns timestamp = milliseconds since unix time


// set of all methods up here
future.setFullYear(2040);
console.log(future);    // year was set to 2040

// 178 OPERATIONS WITH DATES
console.log('-----178 OPERATIONS WITH DATES-----');

console.log(Number(future));
console.log(+future);

const calcDaysPassed = (date1, date2) => Math.abs((date2-date1)/(1000*60*60*24));

const days1 = calcDaysPassed(new Date(2037,3,14), new Date(2037,3,24));
console.log(days1);


// 179 INTERNATIONALIZING DATES
console.log("-----179 INTERNATIONALIZING DATES-----");

//when we do calculations with dates we get a result in milliseconds which we then can use for further calculations

// lots of things were done in the bankist app. Look there for an actual samenvatting


//180 INTERNATIONALIZING NUMBERS
console.log("-----180 INTERNATIONALIZING NUMBERS-----");

//internationalizing numbers RATHER than dates. 
const numb = 3884764.23

const options = {
  style: "currency",   // style has three options: unit, currency, percent (makes unit be ignored)
  unit: 'celsius',    // mile-per-hour, celsius
  currency: 'EUR',    // currency is necessary when doing currency
  // useGrouping: false,   // grouping is removed. de puntjes in 3.000.000,00 
}

console.log('US: ' ,new Intl.NumberFormat('en-US', options).format(numb));

console.log('Germany: ' ,new Intl.NumberFormat('de-DE', options).format(numb));

console.log('Syria: ' ,new Intl.NumberFormat('ar-SY', options).format(numb));
// navigator.language is a general method for browsers.
console.log(navigator.language, 'BROSWER: ' ,new Intl.NumberFormat(navigator.language, options).format(numb));

console.log('NEDERLANDSSSSSSSS: ' ,new Intl.NumberFormat('nl-NL', options).format(numb));