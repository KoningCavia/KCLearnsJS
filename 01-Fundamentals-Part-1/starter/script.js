/*

// VALUES AND VARIABLES

let js = 'amazing';

console.log(40 * 40 + 1);

console.log("wicher");
let firstName = "Jonas";
console.log("de waarde firstName is: " + firstName);
firstName = "bamboeloe";
console.log("de waarde firstName is: " + firstName);


// Assignment 1: Values and Variables
let country = "the Netherlands";
let continent = "europe";
let population = 17 * (10 ** 6);
console.log("the country is: " + country + " which is situated in " + continent + " and has a population of around " + population)

*/


/*

// DATATYPES

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);

// console.log(typeof "cavia");
javascriptIsFun = "Yes";
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

// Below here illustrates a bug. It returns type = object,  it should return type = null. Because null is a type itself. It is kept around because of legacy reasons.
console.log(typeof null);


//ASSIGNMENTS

let isIsland

*/


/*

// Let const and VAR

// let variables can alter be changed
let age = 30;
age = 31;

// const variables are final and cannot be changed later. so the below is illegal.
const birthYear = 1986;
// const birthYear = 1987;

// const should always be initiated. the below example is illegal.
// const pet;

// This is the old way of creating variables and is a lot like let.
var job = "programmer";
job = "teacher";

// last option is to not declare a variable
lastName = "Schmutzi";
console.log(lastName);

*/

/*

// Math Operators

const now = 2037
const ageHarry = now - 1986;
const ageMiep = now - 2019
console.log(ageHarry, ageMiep);

//2**3 means 2^3 = 2*2*2
console.log(ageHarry * 2, ageMiep / 2, 2 ** 3);

//concatenation
const firstName = "wiggle";
const lastName = "fox";
console.log(firstName + " " + lastName);

// = is also a logical operator. however because of reasons the + operator is executed BEFORE the = operator. Or else the below code wouldnt work.
let x = 10 + 5

//assignment operators
console.log(x)
x += 10; // x = x + 10 = 25
console.log(x)
x *= 4;
console.log(x) // x= x* 4 = 100
x++
console.log(x)
x--
console.log(x)

//comparison operators

console.log(ageHarry > ageMiep); // >, <, >=, <=
console.log(ageMiep >= 18);

const isFullAge = ageMiep >= 18; // is the same as line 101
console.log(now - 2019 >= now - 2019); // is also the same
*/

/*

// Operator Precedence

const now = 2037
const ageHarry = now - 1986;
const ageMiep = now - 2019

console.log(now - 2019 >= now - 2019);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5
console.log(x, y);
const averageAge = (ageHarry + ageMiep) / 2;
console.log(ageHarry, ageMiep, averageAge);

*/

/*

// CHALLENGE NUMBER 1

let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

let bMIMark = massMark / (heightMark * heightMark);
let bMIJohn = massJohn / (heightJohn * heightJohn);
let markHigherBmi = bMIMark > bMIJohn;
console.log(bMIMark, bMIJohn);
console.log(markHigherBmi);

*/

/*

// STRING AND LITERALS

const firstName = 'wiggle'
const job = "soft engineer"
const birthYear = 1986;
const year = 2023;

const wiggle = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!"
console.log(wiggle);

// this is exactly the same as the line above, but less confusing to wright. NOTE the use of ` rather than " or '. this method only works with ``. some people make all strings using ``, so to never be confused.
const wiggleNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(wiggleNew);

console.log(`just a regular string`);
console.log('string with \n\ multiple \n\ lines');
//again the below is the same as above, but thanks to the `` it is much more dynamically written.
console.log(`String
multiple
lines`)

*/

/*

// TAKING DECISIONS IF / ELSE STATEMENTS

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log(`Sarah can start her driving license`)
} else {
    const yearsLeft = 18 - age;
    console.log(`You are too young. Please return in ${yearsLeft} years`)
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century)
*/



// CHALLENGE 2

/*

// TYPE CONVERSION AND COERCION

// TYPE CONVERSION
const inputYear = '1991';           // this is a string
console.log(Number(inputYear));     // this converses string to number
console.log(inputYear + 18);        // this still returns a string though
console.log(Number(inputYear) + 18);  // this returns a number

console.log(Number(`Wiggle`));      //returns a Nan (not a number)
console.log(typeof NaN);            // apparently NaN is in fact, a number.
//TYPE COERCION
// we have already used coercion in our code. Like so:;
console.log('I am ' + 23 + 'years old')
// without tyope coercion it would look like this:
console.log('I am ' + String(23) + 'years old');
//what wil happend here though?:
console.log('23' - '10' - 3);   // coercion happened
console.log('23' - '10' + 3);   // coercion for the minus, concatenation for the +. this is confusing isnt it ;)
console.log('23' * '2');        // coercion happened
console.log('23' / '2');

//gues the output:
let n = '1' + 1;    // dit resulteert in een string 11
n = n - 1;          //  dit wordt een number 10
console.log(n);     // antwoord = 10

*/


/*

// TRUTHY AND FALSY STATEMENTS

console.log(Boolean(0));        // falsy value
console.log(Boolean(undefined));// falsy value
console.log(Boolean("wiggle")); // String = true
console.log(Boolean({}));       // empty object = true

const money = 100;      // negative value is truthy as well..
if (money) {
    console.log("Dont spend it all :P")
} else {
    console.log('Get a job!');
}

let height;     // height is a variable without value. So it's undefined.
// let height = 0;  // also undeefined because 0 is falsy
if (height) {
    console.log('yay height is defined')
} else {
    console.log('oye height is undefined')
}

*/

/*


// EQUALITY OPERATORS == vs ===

const age = 18;
if (age === 18) console.log(`you just turned adult`);    //the === checks for equality. also note. without else statement all this can happen on one line.

console.log('18' == 18);    //loose returns true
console.log('18' === 18);   //strict returns false

const favourite = Number(prompt("what's your favourite number?"));  // asks user to input a string and save it as favourite
console.log(favourite);
console.log(typeof (favourite));

if (favourite === 23) {     // this works with == but not with === unless we add number to line 276
    console.log('23 is a pretty cool number yeah')
    alert('23 is a pretty cool number yeah')
} else if (favourite === 7) {
    console.log('7 is also a pretty cool number yeah')
    alert('23 is cool its true')
} else {
    console.log('number is neither 7 nor 23. Not a cool number AT ALL')
}

if (favourite !== 23) console.log("Why not 23?");

*/


/*
// BOOLEAN LOGIC
blblabla

*/

/*

// Logical Operators

const hasDriversLicense = true //A
const hasGoodVision = true  // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);

console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log(`Sarah is able to drive!`)
// } else {
//     console.log(`Someone else should drive`);
// }

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive!`)
} else {
    console.log(`Someone else should drive`);
}

*/

/*


// THE SWITCH STATEMENT

const day = "friday";

// switch (day) {
//     case 'monday': // : niet ;
//         console.log('Plan course structure');
//         console.log("go to coding meetup");
//         break;
//     case 'tuesday':
//         console.log('prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples')
//         break;
//     case 'friday':
//         console.log('Record videos')
//         break;
//     case 'saterday':
//     case 'Sunday':
//         console.log('enjoy the weekend');
//         break;
//     default:
//         console.log('Not a valid day');
// }

if (day === 'monday') {
    console.log('Plan course structure');
    console.log("go to coding meetup");
} else if (day === 'tuesday') {
    console.log('prepare theory videos');
} else if (day === 'wednesday' || day == 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saterday' || day == 'sunday') {
    console.log('enjoy the weekend');
} else {
    console.log('Not a valid day');
}


*/

/*


// STATEMENTS AND EXPRESSIONS

//anything producing a value is an expression
3 + 4       // this is an expression
1991        // expression
true && !false || false     // expression

//this is a statemeny. it initiates a value and saves, but does not create it. pretty weird. but itll make sense later.
if (23 > 10) {
    const str = '23 is bigger';
}


*/


const age = 34;
//dit is een if statemeny op 1 lijn.< if ? true : false >
age >= 18 ? console.log('I like to drink wine') : console.log('i Like to drink water');

const drink = age >= 18 ? `wine` : `water`;

console.log(`drink is: ${drink}`);

//this code does the same as code 3 lines higher (405)
let drink2;
if (age >= 18) {
    drink2 = "wine";
} else {
    drink2 = 'water';
}
console.log(drink2);

// the template literal can also deal with if else statements. Cool right?
console.log(`I like to drink ${age >= 18 ? `wine` : `water`}`)