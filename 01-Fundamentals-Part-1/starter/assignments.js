// Assignment 1: Values and Variables
const country = "the Netherlands";
const continent = "europa";
let population = 17 * (10 ** 6);
console.log("the country is: " + country + " which is situated in " + continent + " and has a population of around " + population)

// 2.1 DATATYPES
let isIsland = false;
let language = "dutch";
// country = "belbium";
console.log("isIsland is " + isIsland + ". population: " + population + ". continent : " + continent + ". language: " + language);

// LET CONST AND VAR

//BASIC OPERATORS
let halfPopulation = population / 2;
console.log(population + 1);
let popFinland = 6 * 10 ** 6;
let higherPopThanFinland = population > popFinland;
console.log(higherPopThanFinland);
let averagePopulation = 33 * 10 ** 6;
console.log(population > averagePopulation);

let description = country + " is in " + continent + ", and its " + population / 10 ** 6 + " million people speak " + language;
console.log(description);

// STRING AND TEMPLATE LITERALS
let descriptionLiteralSyntax = `${country} is in ${continent}, and its ${population / 10 ** 6} million people speak ${language}`
console.log(descriptionLiteralSyntax);

// TAKING DECISIONS: IF/ELSE STATEMENTS
if (population > averagePopulation) {
    console.log(`${country}'s population is above average`)
} else {
    console.log(`${country}'s population is ${(averagePopulation - population) / 10 ** 6} million below average`);
}

// TYPE CONVERSION AND COERCION
4;
console.log('9' - '5');

617;
console.log('19' - '13' + '17');

23;
console.log('19' - '13' + 17)

false;
console.log('123' < 57);

117;
console.log(5 + 6 + '4' + 9 - 4 - 2);
1143

/*

// Equality Operators: == vs ===

numNeighbours = prompt(`How many neighbour countries does your country have?`);

if (numNeighbours == 1) {
    alert("Only 1 border!");
    console.log("only one border!");
} else if (numNeighbours > 1) {
    console.log("More than 1 border.")
} else {
    console.log("No borders..");
}

*/


// LOGICAL OPERATORS
if (
    language == "english" &&
    population < 50 * 10 ** 6 &&
    !isIsland
) {
    console.log(`you should live in ${country}`)
} else {
    console.log(`${country} does not meet your criteria`)
}

// THE SWITCH STATEMENT
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log(`Most number of native speakers`);
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

// THE CONDITIONAL TERNARY OPERATOR
population > 33 * 10 ** 6 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`);