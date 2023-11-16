'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
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
  },

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

// 106 Rest Pattern and Parameters

//Spread because the '...' is on the right side of the '='
const arr = [1,2, ...[3,4]];

//Rest because the '...' is on the left side of the '='
const [a,b, ...others]= [1,2,3,4,5];
console.log(a,b, others);

//arrays
const [pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu
];
console.log(pizza, Risotto, otherFood);


// Objects
const { sat, ...weekdays} = restaurant.openingHours;
console.log({...weekdays});
console.log(weekdays);


// Functions
const add = function(...numbers) {
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    sum+= numbers[i];
  }

  console.log(sum);
  console.log(numbers);
}

add(2,3)
add(5,3,7,2)
add(8,2,5,3,2,1,4)
const x = [23 ,5 ,7]
add(...x)

restaurant.orderPizza('mushroom' , 'onion' , 'olives', 'spinach')
restaurant.orderPizza('poekies')
//105 Spread operator
// console.log(`105 SPREAD OPERATOR`);
// const arr = [7, 8, 9]; // we have array
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]]; // we add array jankily to existing array
// console.log(badNewArray); // but it works
// const newArray = [1, 2, ...arr]; // does the same but better and in less code
// console.log(newArray);
// console.log(...newArray); // it basically just unpacks your entire array

// const newMeny = [...restaurant.mainMenu, 'Gnocci']; // we created a new menu that takes the old meny and adds gnocci. Old array stil exists.

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);


// // real world example
// // ask user for toppings/ingredients and save them in an arrayList
// const ingredients = [
//   // prompt("Let's make pasta! Ingredient 1"), 
//   // prompt("Let's make pasta! Ingredient 2"), 
//   // prompt("Let's make pasta! Ingredient 3")
// ];
// console.log(ingredients);
// //Call the orderPasta function and automatically add the destructured array as arguments
// restaurant.orderPasta(...ingredients);



// //OBJECTS
// const newRestaurant = {...restaurant, founder: 'Guiseppe', foundIn: 1998}
// console.log(newRestaurant);





// 104 DESTRUCTURING OBJECTS
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

// here we call the orderDelivery method. which takes any object (which we just created  in between {} and logs it to the console)

//// 103 DESTRUCTURING ARRAYS

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
