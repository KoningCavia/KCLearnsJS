// Coding Challenge #1
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.

// § Data 1:
let Julia1 = [3, 5, 2, 12, 7];
let Kate1 = [4, 1, 15, 8, 3];

// § Data 2:
let Julia2 = [9, 16, 6, 8, 3];
let Kate2 = [10, 5, 6, 1, 4];

// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:

function checkDogs(arr1, arr2) {
  let arr1MinusCats = arr1.slice(1, -1);
  let allDogs = arr1MinusCats.concat(arr2);

  allDogs.forEach(function (dogAge, i) {
    console.log(
      `Dog number ${i + 1} is a${
        dogAge >= 3 ? "n adult" : " puppy"
      } and is ${dogAge} ${dogAge === 1 ? "year" : "years"} old`
    );
  });
}

// 1. Julia found out that the owners of the first and the last two dogs actually have
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)

// 2. Create an array with both Julia's (corrected) and Kate's data

// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// �
// ")

// 4. Run the function for both test datasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far �
// GOOD LUCK �

checkDogs(Julia1, Kate1);
console.log(`\n\n\n\n`);
checkDogs(Julia2, Kate2);

// Coding Challenge #2

let Data1 = [5, 2, 4, 1, 15, 8, 3];
let Data2 = [16, 6, 10, 5, 6, 1, 4];
// GOOD LUCK �

// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:

// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:

// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// const dogages = [];

// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)

// console.log(`dogsOfAge: `, dogsOfAge, dogsOfAge.length);
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages �)

// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
// GOOD LUCK �

let calcAverageHumanAge = function (dogAges) {
  const dogAgesHumanYears = dogAges.map(age =>
    age <= 2 ? 2 * age : 16 + 4 * age
  );

  const dogsOfAge = dogAgesHumanYears.filter(age => age >= 18);

  let sum = 0;
  const dogsOfAgeAverage = dogsOfAge.reduce(function (acc, age, i) {
    sum += age;
    return (acc = sum / (i + 1));
  }, 0);

  console.log(`dogsOfAgeAverage:`, dogsOfAgeAverage);
};  

calcAverageHumanAge(Data1);
console.log("---------------");
calcAverageHumanAge(Data2);

//CHALLENGE 3

// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
// GOOD LUCK �

// let Data1 = [5, 2, 4, 1, 15, 8, 3];
// let Data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge2 = function(ages) {
  return ages
  .map(age=> age <= 2 ? 2 * age : 16 + 4 * age)
  .filter(age => age >= 18)
  .reduce((acc, age, i, arr) =>
    acc+age /arr.length, 0)
}

const dat1 = calcAverageHumanAge2(Data1)

const dat2 = calcAverageHumanAge2(Data2)

console.log(dat1);
console.log(`--------------`);
console.log(dat2);


// CHALLENGE 4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
  ];
// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10% below the recommended portion (see hint).
// Your tasks:

// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)
// dogs.map(dog => dog.recFood = dog.weight**0.75*28);
console.log(`1: CALCULATE RECOMMENDED FOOR PORTIONS`);

dogs.forEach(dog => dog.recFood = Math.trunc(dog.weight**0.75*28))    //foreach just loops and doesnt return an array
console.log(dogs);


// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) �

//find dog where owner is sarah
console.log(`2: LOG SARAHS DOG`);

console.log(dogs.find(dog => dog.owners.includes('Sarah')));
let sarahsdog = dogs.find(dog=> dog.owners.includes('Sarah')).owners;
console.log(`Sarah's dog is eating too ${sarahsdog.curFood>sarahsdog.recFood? 'much': 'little'}`);

// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').
console.log(`3: CREATE ARRAYS DOGS THAT EAT TOO MUCH AND TOO LITTLE`);

console.log(dogs);
let ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood*1.1).flatMap(dog => dog.owners);    //filter returns an array with dogs that eat too much. flatmap than takes the owners arrays within that array too flatMap them.
let ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood*0.9).flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!
console.log(`4: log two strings one for too much and one for too little`);

let strLittle = ``;
let i = 0;
ownersEatTooLittle.forEach(name => {
  strLittle+= i === 0? `${name}`: ` and ${name}`;
  i++;
})
strLittle += `'s dogs eat too litte!`
console.log(strLittle);

// better solution
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

let strMuch='';
let j=0;
ownersEatTooMuch.forEach(name => {
  strMuch+= j===0 ? `${name}`:` and ${name}`
  j++;
})
strMuch+= `'s dogs eat too much!`
console.log(strMuch);

//better solution
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);


// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)
console.log(`5: any dog eating exactly the recomended amount`);
console.log(dogs.some(dog =>
  dog.curFood === dog.recFood
  ));


// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)
console.log(`6: Any dog eating an ok amount?`);
const checkEatingOk = dog =>  dog.curFood<dog.recFood*1.1 && dog.curFood>dog.recFood*0.9;
console.log(dogs.some(checkEatingOk));

// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)
console.log('7: OK intake dogs');
let okDogs = dogs.filter(checkEatingOk);

  console.log(okDogs);
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects �)
console.log(`8: ordered shallow copy`);
let shallowDogs =dogs.slice()

let sortedShallowDogs2 =dogs.slice().sort((a,b) =>
  a.recFood - b.recFood
);


  console.log(sortedShallowDogs2);