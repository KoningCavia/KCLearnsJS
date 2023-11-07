'use strict';



/*

//ACTIVATE STRICT MODE

let hasDriversLicense = false;
let passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

*/


/*
// FUNCTIONS

function logger() {
    console.log('My name is Wiggle');
}

// calling / running /invoking function
logger();
logger();
logger();

// return means that wherever the method is invoked. after it has run it is replaced by the return value,
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

//this earlier mentioned return means you can directyl log the returned string into the console.log.
console.log(fruitProcessor(5, 0));
// console.log(appleJuice);

*/


/*
// FUNCTIONS< DECLARATIONS VS EXPRESSIONS

//1 FUNCTION DECLARATION  -> function declarations are loaded before any of the code is run.
function calcAge1(birthyear) {
    return 2037 - birthyear;
}

// call aka invoke aka execte
const age1 = calcAge1(1991));
console.log(age1);

// FUNCTION EXPRESSION  -> function expressions are loaded in order of placement in the script.
const calcAge2 = function (birthyear) {
    return 2037 - birthyear
}
const age2 = calcAge2(1991);

console.log(age1, age2);

*/



/*


// ARROW FUNCTIONS
// lambda's?

const calcAge2 = function (birthyear) {
    return 2037 - birthyear
}

//arrow function:
const calcAge3 = birthyear => 2037 - birthyear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthyear, firstName) => {
    const age = 2037 - birthyear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'blinky'));

*/

/*

// FUNCTIONS CALLING OTHER FUNCTIONS

function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    // console.log(applePieces, orangePieces);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} piees of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

*/


// REVIEWING FUNCTIONS


/*

// INTRODUCTION TO ARRAYS

const friend1 = "Ewout";
const friend2 = "Eva";
const friend3 = "Moniek";

//first way to create array
const friends = [`Ewout`, `Eva`, `Moniek`];

console.log(friends);

// second way to create array
const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);       // Retrieving the last value in the array.

friends[2] = 'Jay';
console.log(friends);

const jonas = [`Jonas`, `Schmedtmann`, 2037 - 1991, `teacher`, friends];
console.log(jonas);

// exercise
const calcAge = function (birthyear) {
    return 2037 - birthyear;
}

const years = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(years));    // dit kan dus niet. omdat calcAge een enkel jaartal wil. Deze kan dus niet dealen met een array.

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

*/

/*

// BASIC ARRAY OPERATIONS (METHODS)

const friends = [`Ewout`, `Eva`, `Moniek`];
const newLength = friends.push('Jay');        // push adds object to ending of array, but it also returns the length of the array
console.log(friends);
console.log(newLength);

friends.unshift('Sjon');    //unshift adds element to beginning of array
console.log(friends);       //

const popped = friends.pop();          // this pop removes the last item from the array, but it also returns the item that was popped
console.log(popped);
console.log(friends);

friends.shift();        // shift removes first element from the array.
console.log(friends);

console.log(friends.indexOf(`Eva`));        // returns the index of Eva
console.log(friends.indexOf('rinusde...')); // returns -1 want rinusde bestaat niet in de friends array.

console.log(friends.includes("Eva"));   // returns boolean if the vallue exists in the array.
// console.log

if (friends.includes("Eva")) {
    console.log(`Eva is een vriend`);
}

*/


/*


// INTRODUCTION TO OBJECTS - easy

// DOT VS BRACKET NOTATION
// there are two ways to get properties from an object

const wiggle = {
    firstName: 'wiggle',
    lastName: 'Fox',
    age: 2037 - 1991,
    job: "SE",
    friends: ['Snautsi', 'Evert', 'Poekelientje']
};

console.log(wiggle);

console.log(wiggle.lastName);   // this is dot-notation

console.log(wiggle['lastName'])     // we can do any expression here. So we can mutate the variables we retrieve

// so here we concatenate a certain value with the word name. This would not be possible with the dot notation.
const nameKey = 'Name';
console.log(wiggle['first' + nameKey]);
console.log(wiggle['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Wiggle? Choose between firstName, lastName, age, job and friends');
console.log(wiggle.interestedIn); // this doesnt work
// console.log(wiggle[interestedIn]); // Does work! if the prompt was properly spelled of course.. because the expression gets evaluated and becomes 'job'.

if (wiggle[interestedIn]) {
    console.log(wiggle[interestedIn])
} else {
    console.log('Wrong request silly billy! Choose between firstName, lastName, age, job, and friends');
}

// adding new variables to an object.
wiggle.location = "Netherlands";            // dot
wiggle['twitter'] = '@BestaatNietLal';      // brackets
console.log(wiggle);

// extra little challenge
// "wiggle has 3 friends, and his best friend is called snautsi"
console.log(wiggle.firstName + ' has ' + wiggle.friends.length + ' friends, and his best friend is calles ' + wiggle.friends[0]);
console.log(`${wiggle.firstName} has ${wiggle.friends.length} friends, and his best friend is called ${wiggle.friends[0]}`);


*/

/*
// OBJECT METHODS
const wiggle = {
    firstName: 'wiggle',
    lastName: 'Fox',
    // age: 2037 - 1991,
    birthyear: 1991,
    job: "SE",
    friends: ['Snautsi', 'Evert', 'Poekelientje'],
    hasDriversLicens: true,

    // the below works because its an expression (expressions produce values). Rather than a declaration.
    calcAge: function () {
        return 2037 - this.birthyear;
    },

    getSummary: function () { // remember the () after method calls ie calcAge.
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and he has ${this.hasDriversLicens ? 'a' : 'no'} driver's license.`
    }
};

console.log(wiggle.calcAge(wiggle.birthyear));      //calling the function using dot
console.log(wiggle.calcAge());
console.log(wiggle['calcAge'](1991));   // calling the function using parantheses.

console.log(wiggle['calcAge'](1991));   // calling the function using parantheses.
// CHALLENGE
// "wiggle is a 46-year old teacher and he has a drivers license"
// See WiggleString function
console.log(wiggle.getSummary());  // remember the () after the method

*/


/*
// ITERATIONS THE FOR LOOP

//this is a control structure (like if () statements). This is a fundamental aspect of any language which helps us to automate repetitive tasks.

// console.log('lifting weights repetition 1 ')
// console.log('lifting weights repetition 2 ')
// console.log('lifting weights repetition 3 ')
// console.log('lifting weights repetition 4 ')
// console.log('lifting weights repetition 5 ')
// console.log('lifting weights repetition 6 ')
// console.log('lifting weights repetition 7 ')
// console.log('lifting weights repetition 8 ')
// console.log('lifting weights repetition 9 ')
// console.log('lifting weights repetition 10 ')
// this violates the dry principal very badly. So we use loopyloop

//for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10000; rep++) {
    console.log(`lifting weights repetition ${rep}`)
}
*/

/*

// LOOPING ARRAYS< BREAKING AD CONTINUING
const Jonas = [
    'Jona',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];

//right herer we do ; 1 < length ;
for (let i = 0; i < Jonas.length; i++) {
    //reading from Jonas array
    console.log(Jonas[i], typeof Jonas[i]);

    // filling types array
    // types[i] = typeof Jonas[i];

    // also fills the array, but a little bit cleaner
    types.push(typeof Jonas[i]);
}

console.log(types);


const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS---')
for (let i = 0; i < Jonas.length; i++) {
    if (typeof Jonas[i] !== 'string') continue; // if type of current element is not a string, ignore this one and go to the next loop. (so its not a break, just a pass.)
    console.log(Jonas[i], typeof Jonas[i]);
}

console.log('---BREAK WITH NUMBER---')
for (let i = 0; i < Jonas.length; i++) {
    if (typeof Jonas[i] == 'number') break; // if type of current element is not a string, ignore this one and go to the next loop. (so its not a break, just a pass.)
    console.log(Jonas[i], typeof Jonas[i]);
}
*/

// LOOPING BACKWARDS AND LOOPS IN LOOPS

/*
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}
// omgekeerde loop zijn niet perse vaak nuttig, maar dit is een goede oefening om na te dneken over loops enzo.

//loop in a loop:

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---------------Startin exercise ${exercise}`)

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetetion ${rep}`)
    }
}

*/

// 49   THE WHILE LOOP

for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetetion ${rep}`)
}

// in a while loop you can only define the condition
let rep = 1;
while (rep <= 6) {
    console.log(`WHILE lifting weight repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1
console.log(dice);

while (dice != 6) {
    console.log(`You rolled a ${dice}`);
    // now if you dont rol a 6 it wont reroll the six. sop you are stuck n a loop.
    // unless we roll another die.
    dice = Math.trunc(Math.random() * 6) + 1
}

console.log('you rolled a six')