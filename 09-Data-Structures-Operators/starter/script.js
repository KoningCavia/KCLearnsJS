'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


  const openingHours = {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  }
  
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // simple function that takes an object
  orderDelivery: function (obj) {
    console.log(obj);
  },
  //a simple function that takes an object (note the { }) but destructures it when it is received
  orderDeliveryDestr: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} & ${this.mainMenu[mainIndex]} will be delivered to ${address} around ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is you paste with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients){
  console.log(mainIngredient);
  console.log(...otherIngredients);
  }

};

  //---------------------------------------------------------------------------------
  // Airline 'DATA'


  const airline = 'TAP air Portugal';
  const plane = 'A320';
 

 //-----------------------------------------------------------------------------------
// 124 Working with string 3

// SPLIT AND JOIN


// splits the string at any '+' sign and returns an array of created segments.
console.log('A+very+nice+string'.split('+')); 
console.log('Harry Barry'.split(' '));

// split first and last name
const [firstName, lastName] = 'Harry Barry'.split(' '); 

// joins all strings into the array into one string, devided by a ' '. also lastName is made uppercase
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' '); 
console.log(newName);


// takes a name and capitalizes the first letter of each word.
const capitalizeName = function(name) {
  const names = name.split(' ');
  const namesUpper = [];

  for(const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));   // same but different

  }
  console.log(namesUpper.join(' '));
  }

capitalizeName('jessica ann smith davis');
capitalizeName('Henk Stubbe');
capitalizeName('Floris Jan van Fleppenstein'); 
 
// PADDING
const mesage = 'Go to gate 23!';

//make the string 25  symbols long, padd it using the '+' sign at the start
console.log(mesage.padStart(25, '+'));
console.log(mesage.padStart(25, '+').padEnd(35, '+'));
console.log(mesage.padEnd(25, '+'));    //pad at the end


const maskCreditCard = function(number) {
  const str = number+'';    //turn number into a string 
  const last = str.slice(-4);     // take the alst 4 symbols
  return last.padStart(str.length, '*');  //padd the new string to length of original nr.
}

console.log(maskCreditCard(12345678));
console.log(maskCreditCard('1321i2473411731'));


const message2 = 'Bad weather... All departures delayed...'
console.log(message2.repeat(5));

const planesInLine = function(n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
}
 
planesInLine(5);
planesInLine(3);
planesInLine(22);

//----------------------------------------------------------------------------------
// 123 Working with Strings 2

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAs'; //Jonas
const passengerLower = passenger.toLowerCase();
let passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);  // now it is correct

const fixPassengerName = function(name) {
  const nameLower = name.toLowerCase();
  const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
  console.log(nameCorrect);
}
fixPassengerName('WICHer');
fixPassengerName('HARRY');
fixPassengerName('Mark');

//Comparing Emails

const email = 'hello@harry.io';
const loginEmail = 'Hello@Harry.Io \n';

const lowerEmail = loginEmail.toLowerCase();  // change everything to lower case
const trimmedEmail = lowerEmail.trim(); // Get rid of white space
console.log(trimmedEmail);

//do the above in one step
const normalizedEmail = loginEmail.toLowerCase().trim()

console.log(normalizedEmail);
console.log(email === normalizedEmail);


// REPLACING
const priceGB = '288,97€'   //in europa komma, maar niet in us. 
const priceUS = priceGB.replace('€', '$').replace(',', '.'); //replace specific symbols with other symbols
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));  //however this only replaces the first instance of the word door. 
console.log(announcement.replaceAll('door', 'gate')); // This works (it is new, but it is not in the autosuggestions..)
console.log(announcement);
console.log(announcement.replace(/door/, 'gate'));  // the /txt/ here works like '' but it is called a 'regular expression'. the 'g' means global.


// // BOOLEANS

// const plane2 = 'A320neo';
// const plane3 = 'Airbus neo'
// console.log(plane2.includes('A320'));
// console.log(plane2.includes('Boing'));

// console.log(plane2.startsWith('Air'));  //false
// console.log(plane3.startsWith('Air'));   //true

// // check if plane is an airbus, and check if the type is neo.
// if(plane3.startsWith('Airbus') && plane3.endsWith('neo')) {
//   console.log('Part of the new airbus Family');
// } 

// // PRACTICE EXERCISE

// const checkBaggage = function(items) {
//   const baggage = items.toLowerCase();
//   // const baggage = items; //this doesnt check for uppercased words so the first person could enter with a knife.

//   if (baggage.includes('knife') || baggage.includes('gun')) {
//   console.log('You are not allowed on board')
// } else {
//   console.log('Welcome on Board')
// }}

// checkBaggage('I have a laptop, some Food and a pocketKnife');
// checkBaggage('Socks and Camera');
// checkBaggage('Got some snacks and a gun for protection');



// // -------------------------------------------------------------------------------------
// // 122 working with string 1

//  const airline = 'TAP air Portugal';
//  const plane = 'A320';

//  //every letter in a string has an index number
//  console.log(plane[0]);
//  console.log(plane[1]);
//  console.log(plane[2]);
//  console.log('B737'[0]);  //the same, but directly on the string

//  console.log(airline.length);  // length of the word
//  console.log('B737'.length); 

//  console.log(airline.indexOf('r'));   // find first occurence of a letter
//  console.log(airline.lastIndexOf('r')); // lat occurence of a letter
// console.log(airline.indexOf('Portugal'));   //find words

// //usecase, extract parts of string

// console.log(airline.slice(4));   // 4 is the position where the extraction starts. It excludes the first 4 letters.
// console.log(airline.slice(4, 7));  // 4 is beginning and 7 is end of the slice.
 
// //Extract the first word
// console.log(airline.slice(0, airline.indexOf(" "))); // start at index 0, and ends at index of the first 'space'.
// //extract the last word
// console.log(airline.slice(airline.lastIndexOf(' ')+1));  //we start extraction at first 'space'and we dont specify the end (it's not necesary). We add the +1 to remove the space

// console.log(airline.slice(-2));   // negative values start counting from the end. So this shows the last 2 letters
// console.log(airline.slice(1, -1));  //start at index one and end at second to last index.

// // const checkMiddleSeat = function(seat) {
// //   // B and E are middle seat
// //   if (seat.slice(-1) == 'B' || seat.slice(-1) == 'E') {
// //     console.log(seat.slice(-1));
// //     console.log('Is middle seat');
// //   } else {
// //     console.log(seat.slice(-1));
// //     console.log('Is not middle seat');
// //   }
// // }

// // same solution, written shorteri find this ugly. i prefer using else { }, but whatever.
// const checkMiddleSeat = function(seat) {
// const s = seat.slice(-1);
// if (s =='B' || s =='E')
// console.log('Is middle seat');
// else console.log('Is not middle seat');
// }

// checkMiddleSeat('11B')
// checkMiddleSeat('23C')
// checkMiddleSeat('3E')



//---------------------------------------------------------------------------------------
// //118 Maps iteration


// //in the last method we used the set method to add new values to the map.
// // however there is a different wa thats less cumbersome. Which is during initalization of the map, i guess.

// const question = new Map([
//   ['Question', 'What is the best programming language i the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again']
// ])
// console.log(question); // this gives the exact same array structure as when using:
// console.log(Object.entries(openingHours));
// // in both cases we get an: Array of arrays.
// //this means theres an easy way to convert objects to maps. (but probably not the other way around?)
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Iteration.
// // maps are iterables so the for loop is usable here.
// // first we log the question
// console.log(question.get('question'));
// //then if the key is a number log the key and the value (show only possible answers
// for (const[key, value] of question) {
//   if (typeof key=== 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }};

//   // now open a prompt menu and ask for an answer. The answer is a string so we convert it to a number.
//   const answer = Number(prompt('Your answer'));
//   console.log(answer);


// console.log(question.get(answer == question.get('correct')));

// // convert map back to array:

// console.log([...question]); //now we end again with an array of arrays!
// // console.log([...question.entries]); // is the same as the line above
// console.log([...question.keys]);
// console.log([...question.values]);
// //-----------------------------------------------------------------------------


// // 117 MAPS
// //is a datastructure we can use to 

// const rest = new Map();
// //add key-value pair to the map. similar to the add method in sets
// rest.set('Name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// // this shows not only the added pair, but the entire updated map.
// console.log(rest.set(2, 'Lisban Portugal'));

// //this allows us to chain the set method like so:
// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//     .set('Open', 11)
//     .set('close', 23)
//     .set(true, 'We are open')
//     .set(false, 'We are close');


//     // we can of course retrievve information from our map and all we need is to use get on the name of the key.
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// // determie if the restaurant is open or closed we can do this: rest.get(boolean). if the time is between open and close do rest.get(true) (is open), else do rest.get(false) (closed).
// const time = 21;
// rest.get(time > rest.get('open') && time<rest.get('close'));

// //check if certain key is present
// console.log(rest.has('categories'));
// //remove key-value pair
// rest.delete(2);
// console.log(rest);

// //size property
// console.log(rest.size);

// //remove all elements from map
// rest.clear();
// console.log(rest);

// //use an array as a key-value pair
// rest.set([1,2], 'Test');
// console.log(rest.get([1,2]));  // this returns undefined. weird right? It's because while the values are the same, it is a different Array/object. 
// //This WOULD work
// const arr = [3,4];
// rest.set(arr, 'Test2');
// console.log(rest.get(arr));

// // dome elements are objects. So we can get the heading. Now if you hover over h1 in the dom, it will highlight the heading element. pretty cool hey.
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);



//-----------------------------------------------------


// // 116 SETS


// // a set = a unique set of iterables. So for example here an array (which is iterable). 
//   const ordersSet = new Set([
//     'Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza'
//   ]);
//   console.log(ordersSet);

//   // a string is also iterable
//   console.log(new Set('Jonas'));

//   // get size of set. Note it is not .length, but .size 
//   console.log(ordersSet.size); // 3

//   // Check if a particular value is present in the set
//   console.log(ordersSet.has('Pizza')); // true
//   console.log(ordersSet.has('Bread')); // false

//   // add new elements to set
//   ordersSet.add('Garlic Bread');
//   ordersSet.add('Garlic Bread'); // the garlic bread was added twice, but shows once of course

//   //remove element from set
//   ordersSet.delete('Risotto');
//   console.log(ordersSet); // no risotto anymore

//   // a set doesnt have indexes. So the below doesnt work. This makes sense: there is no need for it. If all values are unique and they have no order. then it doesnt make any sense.
//   console.log(ordersSet[0]);

//   // // Empty a set:
//   // ordersSet.clear;

//   // looping over set (they are iterables)
//   for (const order of ordersSet){
//   console.log(order)  
//   } // results in loose values rather than a array.


//   //Example UseCase  -> a typical use for sets is removing duplicates from an array.
//   const staff = ['waiter', 'Chef', 'waiter', 'Manager', 'Chef', 'waiter'];
//   //lets check which positions exist in our restaurant
// const staffUnique = new Set(staff);
// console.log(staffUnique);
// //now we have a set, but we want it to be an array again.
// //we make a new Set using the staff array. and we immediately destructure that (...) and make it an array ( [] ) 
// const staffUniqueArray = [...new Set(staff)];
// console.log(staffUniqueArray);

// // it looks a bit weird, but here we log to the console how many unique values are in the Set (3).
// // we have a list of non-uique values. We turn it into a set and we determine the size, which we log to the console.
// console.log(new Set(['waiter', 'Chef', 'waiter', 'Manager', 'Chef', 'waiter']).size);


// console.log(new Set('HarrydeBarry').size);


// ------------------------------------------------------------------------------------


// // 114 Looping objects, + keys values and entries
// // Object.keys(openingHours) takes the openinghours object's KEYS and turns it into an Array
// const properties = Object.keys(openingHours);
// console.log('keys:', properties);

// let openStr = `We are open on ${properties.length} days:`;
// //114 looping over objects
// for (const day of properties) {
//   // console.log(day);
//   openStr += `${day}, `;
// }

// console.log(openStr);


// //PROPERTY VALUES
// // before we got the keys, now we got the values
// const values = Object.values(openingHours);
// console.log('values',values);


// //ENTIRE object
// //and now we use "entries" which is both the key and the values.
// const entries = Object.entries(openingHours);
// console.log('entries:', entries);

// // down here we destructure the openingHours object and the arrays containing the times. 
// for (const [key, {open, close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }


// // 113 Chaining chaining

// // oh oh. Maandag bestaat helemaal niet. Dus mon.open bestaat ZEKER  niet. Wat nu?
// // console.log(restaurant.openingHours.mon.open);

// //we kunnen dit doen om te checken of mon uberhaupt bestaat. Dit is onleedbaar broer wtf.
// // en als maandag wel bestaat, maar er zijn geen openings hours, dan
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// // en als maandag wel bestaat, maar er zijn geen openings hours, dan moet je nog een check doen. en dit kan best wel doorslaan met lange method chains
// if (restaurant.openingHours.mon && restaurant.openingHours.mon.open) console.log(restaurant.openingHours.mon.open);

// //optional chaining to the rescue. EZ Bby. og btw de ? is nullish (like before)
// console.log(restaurant.openingHours.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri' , 'sat', 'sun'];
// for(const day of days) {
//   console.log(day);
//   //day isnt an actual name in the object. just a name in the for loop
//   // restaurant.openingHours.day
//   //so we do this: and im not sure why
//   console.log(restaurant.openingHours[day]);
// }

// // use case of the nullish coalescing operator!!! and also optional chaining
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'oh shit, we actually closed';
//   console.log(`on ${day}, we open at ${open}`);
// }

// //METHODS
// //check to see if method exists or gives a warning.
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist');

// //ARRAYS
// //to check if array is empty
// const users = [
//   // {name: 'Jonas', email: 'hello@jonas.io'}
// ]
// console.log(users[0]?.name ?? 'User array empty');

// //the above used to be like this
// if(users.length>0) {
//   console.log(users[0].name)
//  } else {
// console.log('Users Array empty');
// }
// //. what a hassle. nooo optional chaining is much better.

// // 111 Looping arrays: the for-loop

// const menu = [...restaurant.starterMenu, ... restaurant.mainMenu]

// for (const item of menu) {
//   console.log(item);
// }

// // the entries method wil return an individual array for each item. This array contains both the index number of the item and the item itself.
// for (const item of menu.entries()) {
//   console.log(item)
// }

// // index 0 gives the index number, indes 1 gives the item. 
// for (const item of menu.entries()) {
//   console.log(`${item[0]+1}: ${item[1]}`);
// }

// // we can treat the array like any other array and use destructuring here. kinda amazing
// for (const [i, el] of menu.entries()) {
//   console.log(`${i+1}: ${el}`);
// }



// // 109 Logical Assignment operators
// const rest1 =  {
//   name: 'Capri',
//   numGuests: 0,
// };
// const rest2 =  {
//   name: 'la Piazza',
//   owner: 'Giovanni Rosi',
// };

// //FIRSTLY based of  || -> the OR assignment operator
// // // Using the || operator to set a default
// // rest2.numGuests = rest2.numGuests || 10
// // rest1.numGuests = rest1.numGuests || 10

// // // This is literally the same but even Shorter!
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // console.log(rest1);
// // console.log(rest2);

// //SECONDLY variant of ?? -> Nullish assignment operator

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest1);
// console.log(rest2);


// // Thirdly:variant of && -> the AND assignment operators 
// // If the restaurant has an owner, we want to replace it with the string anonymous

// // rest1.owner = rest1.owner && '<ANONYMOUS>';     // returns undefined, because rest1.owner is undefined
// // rest2.owner = rest2.owner && '<ANONYMOUS>';     // returns anonymous, because rest2.owner is truthy
// rest1.owner &&= '<ANONYMOUS>'
// rest2.owner &&= '<ANONYMOUS>'

// console.log(rest1);       // returns undefined, because rest1.owner is undefined
// console.log(rest2);       // returns anonymous, because rest2.owner is truthy



// // //108 The nullish coalescing operator (??)

// // restaurant.numGuests = 0;
// // const guests = restaurant.numGuests || 10;
// // console.log(guests);

// // // this works literally like the || operator except it works with nullish values rather than falsy values:
// // const guestCorrect = restaurant.numGuests ?? 10;
// // console.log(guestCorrect);

// // // 107 && }} and shortcircuiting

// // //this can use ANY data type and can return ANY datatype
// // console.log(3 || 'Jonas');

// // console.log('' || 'Jonas');
// // console.log(true || 0);
// // console.log(undefined || null);

// // console.log( undefined || 0 || '' || 'Hello' || 23 || null);

// // //check wether there is a value numGuests if not defaults to ten.
// // restaurant.numGuests = 23;
// // const guests1 = restaurant.numGuests ? restaurant.numGuests :10;
// // console.log(guests1);

// // //this does literally the same but much quicker.
// // const guests2 = restaurant.numGuests||10;
// // console.log(guests2);



// // console.log('------ AND ------');
// // // && does the opposite of || (which is counter intuitive actually).
// // // If the datatype is falsey, it immediately gets returned and it short circuits
// // //logic here: the last operator will only be published if EVERYTHING is true. 
// // //If anything is falsy, than you can return that falsy value, because the entire list will be falsy
// // console.log(0 && 'Jonas');
// // console.log(7 && 'Jonas');

// // //practical example
// // // If the method orderPizza exists (in js i bet you can create the method for an instance whenever thinking in js baby), then perform the method order pizza
// // if (restaurant.orderPizza) {
// //   restaurant.orderPizza('bacon', 'chickens')
// // }

// // //this can be shortened to:
// // restaurant.orderPizza && restaurant.orderPizza('chicken', 'bacons')


// // // 106 Rest Pattern and Parameters

// // //Spread because the '...' is on the right side of the '='
// // const arr = [1,2, ...[3,4]];

// // //Rest because the '...' is on the left side of the '='
// // const [a,b, ...others]= [1,2,3,4,5];
// // console.log(a,b, others);

// // //arrays
// // const [pizza, , Risotto, ...otherFood] = [
// //   ...restaurant.mainMenu,
// //   ...restaurant.starterMenu
// // ];
// // console.log(pizza, Risotto, otherFood);


// // // Objects
// // const { sat, ...weekdays} = restaurant.openingHours;
// // console.log({...weekdays});
// // console.log(weekdays);


// // // Functions
// // const add = function(...numbers) {
// //   let sum = 0
// //   for (let i = 0; i < numbers.length; i++) {
// //     sum+= numbers[i];
// //   }

// //   console.log(sum);
// //   console.log(numbers);
// // }

// // add(2,3)
// // add(5,3,7,2)
// // add(8,2,5,3,2,1,4)
// // const x = [23 ,5 ,7]
// // add(...x)

// // restaurant.orderPizza('mushroom' , 'onion' , 'olives', 'spinach')
// // restaurant.orderPizza('poekies')



// //105 Spread operator
// // console.log(`105 SPREAD OPERATOR`);
// // const arr = [7, 8, 9]; // we have array
// // const badNewArray = [1, 2, arr[0], arr[1], arr[2]]; // we add array jankily to existing array
// // console.log(badNewArray); // but it works
// // const newArray = [1, 2, ...arr]; // does the same but better and in less code
// // console.log(newArray);
// // console.log(...newArray); // it basically just unpacks your entire array

// // const newMeny = [...restaurant.mainMenu, 'Gnocci']; // we created a new menu that takes the old meny and adds gnocci. Old array stil exists.

// // // Copy array
// // const mainMenuCopy = [...restaurant.mainMenu];

// // //join 2 arrays
// // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // console.log(menu);

// // const str = 'Jonas';
// // const letters = [...str, ' ', 'S.'];
// // console.log(letters);


// // // real world example
// // // ask user for toppings/ingredients and save them in an arrayList
// // const ingredients = [
// //   // prompt("Let's make pasta! Ingredient 1"), 
// //   // prompt("Let's make pasta! Ingredient 2"), 
// //   // prompt("Let's make pasta! Ingredient 3")
// // ];
// // console.log(ingredients);
// // //Call the orderPasta function and automatically add the destructured array as arguments
// // restaurant.orderPasta(...ingredients);



// // //OBJECTS
// // const newRestaurant = {...restaurant, founder: 'Guiseppe', foundIn: 1998}
// // console.log(newRestaurant);





// // 104 DESTRUCTURING OBJECTS
// console.log('104 DESTRUCTURING OBJECT');

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// //

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, tags, hours);

// //DEFAULT VALUES
// // menu = [], zet een defaultvalue. "startMenu: starter = []" zet een alias (starter) en een default value voor attribute startMenu
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //MUTATING VARIABLES
// //first we create two variables with default values
// let a = 111;
// let b = 999;
// // we create an object with three variables named a, b, and c
// const obj = { a: 23, b: 7, c: 14 };

// // //we want to mutate variables a and b into the a and b variables from the object. However this intuitive solution doesnt work.
// // // because this {} normally depicts a codeblock.
// // {a,b} = obj;
// // we need to wrap the entire thing in parenthesese for it to work
// ({a,b} = obj);
// console.log(a,b);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'smakelaarsveld 3',
//   starterIndex: 2,
//   mainIndex: 2,
// });

// restaurant.orderDeliveryDestr({
//   time: '22:30',
//   address: 'smakelaarsveld 3',
//   starterIndex: 2,
//   mainIndex: 2,
// });
// console.log('BEYOND HERE BE DRAGONS');
// console.log('BEYOND HERE BE DRAGONS');
// console.log('BEYOND HERE BE DRAGONS');

// //NESTED OBJECTS
// // I find this weird, but fri needs to be an attribute of openingHours. and it can only be calles by the log if you initalize it like this first
// const { fri } = openingHours;
// console.log(fri);

// // (but i guess this does work in fact)
// console.log(openingHours.fri);

// const {
//   fri: { open, close },
// } = openingHours;
// console.log(close, open);

// // here we call the orderDelivery method. which takes any object (which we just created  in between {} and logs it to the console)

// //// 103 DESTRUCTURING ARRAYS

// // 103 theory:
// const arr = [2, 3, 4];
// // line by line destructuring
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // destructuring in one line:

// const [x, y, z] = arr; // this looks like an array but it is not. It is a way to initialize several values in one line.

// // theory based on the restaurant object (rondom 10:00 )
// let [main, secondary] = restaurant.categories; // this extracts the first and second value of the categories array and saves them as tbhe variables main and secondary
// console.log(main, secondary);

// //This is a (slow) method to switch the values:       it requires storing temporary values and is a hassle and hard to read.
// const temp = main; // temporary save for main
// main = secondary; // main gets overwritten with new secondary
// secondary = temp; // secondary gets overwritten with main
// console.log(main, secondary);

// // this is better:          It is readable and simple.
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //Nested destructuringg
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// const [l, , [m, n]] = nested;
// console.log(l, m, n);

// //Default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r); // the third value r is undefined, because the original array only had two values
