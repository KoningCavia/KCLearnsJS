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

  if(currentAccount?.pin === Number(inputLoginPin.value)) {
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
  const amount = Number(inputTransferAmount.value);
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

  const amount = Number(inputLoanAmount.value)

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
  if(currentAccount.username === closeAccount && Number(currentAccount.pin) === Number(closePin)) {
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



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;

// 167 ARRAY METHODS PRACTICE
console.log('-----167 ARRAY METHODS PRACTICE-----');


//1
//calculate how much has been deposited in total
const allTransactions = accounts.flatMap( acc => acc.movements);
let deposits = allTransactions.filter(trans => trans>0);
let totalDeposits = deposits.reduce((acc, cur) => acc+cur);
console.log(allTransactions);
console.log(deposits);
console.log(totalDeposits);
let totalChain = accounts
  .flatMap(acc=> acc.movements)
  .filter(trans => trans>0)
  .reduce((acc, cur)=>acc+cur);
console.log(totalChain);

//2
//Count how many deposits there have been with at least 1000 dollars
const trans1000Count = accounts
  .flatMap(acc => acc.movements)
  .filter(trans => trans>=1000)
  .length;
console.log(trans1000Count);

const trans1000Reduce = accounts
  .flatMap(acc => acc.movements)
  .reduce((accu, curr) => curr>=1000? accu+1: accu
    ,0);

console.log(trans1000Reduce);

//3
// create a new object which contains the sum of je deposits and the withdrawals.

const sumAllTransactions = accounts
  .flatMap(acc=>acc.movements)
  .reduce((acc, cur) => acc+Math.abs(cur) 
  ,0);
  console.log(sumAllTransactions);


// 165 MORE WAYS OF CREATING AND FILLING ARRAYS

console.log('-----165 MORE WAYS OF CREATING AND FILLING ARRAYS-----');

const arr = [1,2,3,4,5,6,7];             //create new array
console.log(new Array(1,2,3,4,5,6,7));    // same    


//EMPTY ARRAYS + FILL METHOD
const x = new Array(7);     // this surprisingly creates a new array with a length of 7 empty values
console.log(x);
console.log(x.map(() => 5));    // this does not fill the entire arra with the value 5
console.log(x.map(value => value = 5)) ;    // also no fill... :(
// x.fill(1);          // the .fill method will fill it actually.
x.fill(1,3,5)       // fill it with '1's but only from index 3 untill index 4 (including index 3 excluding index 5)
console.log(x);

arr.fill(23, 2,6)
console.log(arr);

//ARRAY.FROM
const y = Array.from({length: 7}, () => 1);       //create an array with length 7 filled with 1's, using a callback function that just returns 1 every time
console.log(y);

// const z = Array.from({length: 7}, (z, i )=> 1+i);         // returns 1+i which is the new z
const z = Array.from({length: 7}, (_, i )=> 1+i);     // the callback function here works exactly like the .map method.
console.log(z);


// 100 random diceroles in an array
const die = Array.from({length: 100}, () => Math.trunc(Math.random()*100)+1);
console.log(die);


// ARRAY.FROM
//              allows to make arrays from ANY iterable





labelBalance.addEventListener('click', function() {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
console.log(movementsUI);
  console.log(movementsUI.map(el => Number(el.textContent.replace('€', ''))));
})

// // 164 SORTING ARRAYS
// console.log('-----164 Sorting Arrays-----');


// const owners = ['Jonas', 'Zac' , 'Adam', 'Martha'];
// console.log(owners.sort());   // sorts from A to Z

// console.log(owners);        // the original arrays is mutated. So we have to be very careful about using this method


// console.log(movements);
// // console.log(movements.sort());    // wait this looks weierd. It is because these values are sorted as strings


// // return < 0 dan A , B
// // return > 0 dan B , A
// console.log(movements.sort((a,b) => {       // a = currentValue  |  b = nextValue
//   if(a>b)
//     return 1;
//   if(a<b) 
//     return -1;
// }));
// //ascending
// console.log(movements.sort((a,b) => {       // a = currentValue  |  b = nextValue
//   if(a>b)
//     return -1;
//   if(a<b) 
//     return 1;
// }));
// // descending (changed 1 and -1)

// movements.sort((a, b) => a - b);  // ascending
// console.log(movements); 

// movements.sort((a, b) => b - a);  // descending


// // the above works perfectly because if a is bigger than b it will always return a positive result. However is b is bigger than a it wll always return a negative results. 
// // that is all you need to know about sorting numbers

// // Back to the app. the sorting 



// // 163 FLAT AND FLATMAP
// // USED TO DEAL WITH NESTED ARRAYS
// console.log('-----163 FLAT AND FLATMAP-----');


// const arr = [[1,2,3], [4,5,6] ,7,8];    // we hebben een array met arrays
// console.log(arr.flat());        // .flat plakt heel handig alle arrays aan elkaar in 1 array


// const arrDeep = [[[1,2],3], [4,[5,6]] ,7,8];  // array in een array in een array?
// console.log(arrDeep.flat());  // nee dat werkt niet helemaal, we hebben nu een array met arrays

// console.log(arrDeep.flat().flat());   // dubbel flatten
// console.log(arrDeep.flat(2));   // ah we kunnen een nummer toevoegen waarmee we aangeven hoe veel levels we willen flatten


// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements.flat());   // 1 array
// console.log(accountMovements);          // array of arrays

// //FLAT
// const overallBalance = accounts
// .map(acc =>acc.movements)
// .flat()
// .reduce((acc, mov) => acc = acc + mov, 0); // chain all methods
// console.log(overallBalance);

// //apparently performing .map() followed by .flat() is used a lot. So a new method was created that does both at the same time (more efficiently). So adding several arrays together (.map) and then turning that in one array (.flat)

// //FLATMAP
// const overallBalance2 = accounts
// .flatMap(acc =>acc.movements)
// .reduce((acc, mov) => acc = acc + mov, 0); // chain all methods
// console.log(overallBalance2);
// // Note flatMap can only go 1 level deep. 



// // 162 SOME AND EVERY

// console.log('-----162 SOME AND EVERY-----');

// console.log(movements);

// // EQUALITY
// console.log(movements.includes(-130));      // -130 is indeed in the array
// // so  includes checks for equality. is the exact value -130 available in the movements aray.

// //But what if we want to check for a condition instead.
// //THE SUM METHOD

// //we want to know if there were any deposits on the account

// // SOME:CONDITION
// console.log(movements.some(mov => mov === -130));   // is the same as above


// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);     // true

// const depositsOver5000 = movements.some(mov => mov>5000);
// console.log(depositsOver5000);    //false

// // EVERY  
// //returns true if ALL of the elements return true

// console.log(movements.every(mov => mov > 0));             // false
// console.log(account4.movements.every(mov => mov > 0));    // true 

// const deposit = mov => mov < 0;       // here we store the method/condition in a value so we can use it elsewhere. REMEMBER THIS IMPORTANT USEFULL

// console.log(movements.some(deposit)); 
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// // 158 the find method

// console.log("-----158 the find method-----");
// const firstWithdrawal = movements.find(mov => mov < 0)

// // the find method is similar to the filter method, except in stead of returning an array with all values that follow the criteria
// // it returns only the first single element that follows the criteria

// console.log(movements);
// console.log(firstWithdrawal);


// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);




// // 156 THE MAGIC OF CHAINING METHODS


// // here we filter all array methods neatly
// const totalDepositsUSD = movements.filter(mov => mov > 0)
// // .map(mov=> mov * euroToUsd)
// .map((mov,i,arr)=> mov * euroToUsd)
// .reduce((acc, mov) => acc+mov);
// console.log(totalDepositsUSD);

// // if you want to add loggin, for example to check the outcome array of the first (filter) method we could change the second (map) method like this:
// const totalDepositsUSD2 = movements.filter(mov => mov < 0)
// .map((mov,i,arr)=> {
//   console.log(arr);
//   return mov * euroToUsd;
// })
// .reduce((acc, mov) => acc+mov,0);
// console.log(totalDepositsUSD2);


// // 154 THE REDUCE METHOD

// console.log(movements);

// // this method works with a callback function that takes the three parameters like always, but it has an extra parameter placed first, which is a bit different. It is called the accumulator. IT is basically an accumulation of all values that were considered up untill now
// // in short, it is the sum.
// //the reduce method returns a single value (rather than an array for the filter and map methods)
// const balance = movements.reduce(function(acc, cur, i, arr){
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

// console.log(balance);
// //The reduce function itself has a second parameter, this is the inital value of the accumulator

// //ARROW FUNCTION
// const balanceArrow =  movements.reduce((acc, cur) => acc += cur, 0);
// // Let's rebuild the reduce method using a FOR LOOP
// console.log('balanceArrow: ', balanceArrow);

// let balance2 = 0; // initial sum value
// for (const mov of movements) balance2 += mov;
// console.log(balance2);
// // we only need one external variable whenever we want to use a forloop. This gets unpractical when we need many loops for many calculatons.



// // Other stuff (besides accumulating values)

// // Get MAX value
// // reduce is to boil down the entire array to one value, which could be ANY value
// const maxValue = movements.reduce((acc, cur, i, arr) => cur >= acc ? cur : acc, movements[0]);
// console.log(maxValue);


// // The reduce method is by far the most powerfull method we learned in this section (map, filter, reduce) and also the hardest to use. We will learn about it though ;)




// balance(movements);



// // 153 THE FILTER METHOD

// // this worls (again) with a callback function.
// //thos (again) takes three parameters (value, i, complete array).

// // the return (callback) function should return a boolean!
// const deposite = movements.filter(function(mov) {
//   return mov > 0;
// })
// console.log(deposite);

// //DIFFERENCE WITH FOROF LOOP
// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const depositsOfLoop = [];
// for (const mov of movements) {
//   if (mov > 0)
//   depositsOfLoop.push(mov);
// }

// console.log(`deposits OFLOOP: `, depositsOfLoop);

// // challenge
// const withdrawals = movements.filter(
//   mov => mov > 0
// )
// console.log(`withdrawals: `, withdrawals);
// // so they both do the same. the filter method is a bit more convenient, so whats up?
// // well
// // map allows for chaining lots of array methods, which would be alot harder for the forOf loop





// // 152 COMPUTING USERNAMES

// //
// const user = 'Steven Thomas Williams';  // stw
// const username = user.toLowerCase().split(' ').map(name => name[0]).join('');
// console.log('username: ', username)

// //and further see the createUserNames method above:




// // 151 THE MAP METHOD


// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // const euroToUsd = 1.1;

// const movementsUSD = movements.map(function(mov) {
//   return mov*euroToUsd;
// })
// const movements23 = movements.map(function(mov) {
//   return 23; 
// })

// console.log(movements);
// console.log(movementsUSD);
// console.log(movements23);


// //lets write the above method as a forOf loop.
// const movementsUSDFor = [];
// for (const mov of movements) {
//   movementsUSDFor.push(mov*euroToUsd);
// }
// console.log(movementsUSDFor);

// // Little Challenge create an arrow function variant of the map function
// // omg remember this. this is a verry quick arrow function.
// //some people say this is bad because its less readable. But gosh it seems handy,
// const movementsUSDArrow = movements.map(mov => mov * euroToUsd)   // IMPORTANT EXAMPLE
// console.log(`arrow function:`, movementsUSDArrow);


// // like the forEach method the map method has acces to the same three parameters (value, index, complete array)

// const movementsDescriptions = movements.map((mov, i, arr) => {
//     if (mov > 0) {
//     return `Movement  ${i+1} You deposited ${mov}`;
//   } else {
//     return `Movement ${i+1}: You withdrew ${mov}`;
//   };
// })
// console.log(`movementsDescription:`, movementsDescriptions);

// // Above method simplified
// const movementsDescriptions2 = movements.map((mov, i, arr) => {
//   return `Movement ${i+1} You ${mov >= 0 ? `deposited` : `withdrew`} ${Math.abs(mov)}`
// });
// console.log('movementsDescriptions2:', movementsDescriptions2);

// // now you could say: this does exactly the same thig as the forEach method. However the foreach method logs stuff to the console (for example) and that is a side effect. 
// // in other words: THE FOREAHC METHOD HAS SIDE EFFECTS.




// // 150 DATA TRANSFORMATIONS, MAP, FILTER ,REDUCE


// // theory lecture

// // these are three methods we use all the time to tranform array data .

// // map 
// // is a method to loop over arrays. It is similar to "forEach", however map creates a brand new array based on the original array. It also jsut works with a callback function, but always creates an array (forEach can do anything, but i guess it takes more steps to create an array, this is more convenient)

// // FILTER
// // This method loops over an array and returns a new array that contains only those variables that satisfy a certain condition (eg (current >2) )


// // REDUCE
// // reduce boils down all vallues in an array into 1 value. For example sum all values (or whatever you want to happen).




// // 148 DOM MANIPULATION

//         // THIS METHOD IS DUPLICATED ABOVE
// const displayMovements = function(movements) {
//   containerMovements.innerHTML = '';      // className.innerhtml = '' sets the html to a string ''
  
//   movements.forEach(function(mov, i) {
//     const type = mov > 0 ? 'deposit' : 'withdrawal';
  
//     const html = `
//       <div class="movements__row">
//         <div class="movements__type movements__type--${type}">${i + 1} ${type}t</div>
//         <div class="movements__value">${mov}</div>
//       </div>
//     `;
//     containerMovements.insertAdjacentHTML('afterbegin', html);
//     // containerMovements.insertAdjacentHTML('beforeend', html);  // this would show everything in reverse order. Check the documentation. it makes it clear.
//   });
//   };
  
//   displayMovements(account1.movements);
  
//   console.log(containerMovements.innerHTML);    // innerHTML is not just a setter. it also returns the html, like so.
  
  
  

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];



// // 146 forEach with maps and sets

// //MAPS
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// //this is an array of arrays
// // remember that a map is an array of [key, value] pairs
// // similar to arrays you can call the forEach which can take 3 values
// // current value, curreny key, complete map.
// currencies.forEach(function(value, key, map){
//   console.log(`${key}: ${value}`);      // only unqique values
// })


// //SET
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

// console.log(currenciesUnique);
// currenciesUnique.forEach(function(value, key, map) {
//   console.log(`${key}: ${value}`);        
// })
// // apparently key here is exactly the same as value.
// // this is because a set is unique values only, so having a unique key wouldnt make sense.
// // to prevent confusion they decided to keep the syntax for this forEAch function the same to all other forEach functions.






// // 145Looping arrays: forEach
// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// // first a FOROF loop. As a comparison
// for (const movement of movements) {
//   if (movement >0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(console.log(`You withdrew ${Math.abs(movement)}`));
//   }
// }

// // Now the FOREACH loop
// // a FOREACH loop needs a callback function. forEach is a higher order function.
// // forEach will loop over the array and for each value it will call the function.
// console.log('-------------FOREACH-------------------');
// movements.forEach(function(movement) {
//   if (movement >0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(console.log(`You withdrew ${Math.abs(movement)}`));
//   }
// })


// console.log('-------------FOREOF + INDEX-------------------');
// // 0: function(200)
// // 1: function(450)
// // 2: function(400)

// // using index and value in a FOROF (HERHALING as an example)
// // In the forOf loop you have to specifically assign the index and the value as a little array, like so
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement  ${i+1} You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i+1}: You withdrew ${movement}`);
//   }
// }


// console.log('-------------FOREACH + INDEX-------------------');
// // The for each method however automatically gives the index and array like so:
// // note that you can give each of these elements any name you want.
// // BUT the order wil always be the same: 1:current element | 2: indexnr | 3: the entire array that we are looping over.
// movements.forEach(function(movement, i, arr) {
//   if (movement > 0) {
//     console.log(`Movement  ${movement+1} You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${movement+1}: You withdrew ${movement}`);
//   }
// })

// // CONCLUDING foreach is easier because its basically automatic.

// // when to use which:
// // you can not break out of a forEach loop. It will always loop through the entire array.
// // So if you need to break out you need to use the forOf loop.


// // 144 SIMPLE ARRAY METHODS

// const arr2 = [23, 11, 64];
// console.log(arr2[0]);    //shows index 0 or array (duh)
// console.log(arr2.at(0));   //does the same but with a method.
// // But why?

// // suppose we dont know the end of the array. We would do this:
// console.log(arr2[arr2.length-1]);   //returns last value of the array
// console.log(arr2.slice(-1)[0]);       // returns last value of the array (without brackets it returns an array with one value. with brackets just the value)

// //these are two classical methods to get the last value.
// // however the at method makes this easier
// console.log(arr2.at(-1));
// console.log(arr2.at(-2));
// //we dont need '-1', we dont need an extra [0]. we can just say -1 and it returns the value.

// // which should you use? it depends. But you probably want the .at method. Also for method chaining.

// console.log('Harry'.at(0));   // also works with strings (which are arrays.)


// console.log('\n\n\n\b');

// // 143 SIMPLE ARRAY METHODS



// //Arays are objects that have their own set of methods that act as tools to deal with arrays


// let arr2 = ['a', 'b', 'c', 'd', 'e'];

// //SLICE  (just like in strings)     (no mutates)
// console.log(arr2.slice(2))       // slices AFTER 2 (so 3 and after is included, but not 2)
// console.log(arr2.slice(2, 4))    // slices BEFORE 4 (so 4 and before is included)

// console.log(arr2.slice(-2));     // takes the last 2 elements of an array
// console.log(arr2.slice(-1));     // gets the last element this is very handy, remember this.
// console.log(arr2.slice(1, -2));  // gets everything except the first 1 and the last 2.
// console.log(arr2.slice);         // creates a shallow copy.
// console.log([...arr2]);      //also creates a shallow copy.

// //SPLICE  (mutates)
//   console.log("\n\n\n\n\SPLICING");
//   console.log(arr2.splice(2));   //result seems the same, however look at the original array
//   arr2.splice(-1)
//   console.log(arr2);             // the spliced values are REMOVED from the ORIGINAL array.
//   //most of the time the removed part that we spliced (the first) doesnt interest us. This is generally used to remove data from the original aray.


// // Splicing parameters work differently from slice. Here splicing starts after 1, but then only the next 2 values are spliced. so specifically only value 2 and 3 are removed.
// // arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr2.splice(1,2))
// console.log(arr2)            // and everything BUT 2 and 3 are still in the original array.


// // REVERS   (mutates)
// console.log("\n\n\nREVERSE");

// arr2 = ['a', 'b', 'c', 'd', 'e'];
// let arr3 = ['j','i','h','g','f'];
// console.log(arr3.reverse());      // dont forget the '()'
// console.log(arr3);      // reverse does mutate the array. The original array stays reversed.

// // CONCAT   (NO mutate)
// console.log('\n\n\nCONCAT');
// const letters = arr2.concat(arr3);     // concats arrays // (NO mutate)
// console.log(letters);     
// console.log([...arr2, ...arr3]);       // does the same as concat.  (NO mutate)


// // JOIN
// console.log('\n\n\nJOIN');

// //Works just like letters
// console.log(letters.join(' - '));   // joins all the letters in the array with a dash.

// // remember also we know
// // : push unshift pop shift indexOf and includes


/////////////////////////////////////////////////
