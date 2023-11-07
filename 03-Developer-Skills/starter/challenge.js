// TEST DATA 1:[17, 21, 23];
// TEST DATA 2:[12, 5, -5, 0, 4];

const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];

// STEPS TO TAKE:

//create empty string

// create a string template

// make a loop the length op te array

// concatenate each value into the loop

// determine current day

// print to the console

const printForeCast = function (arr) {
  let forecastString = '';

  for (i = 0; i < arr.length; i++) {
    forecastString = forecastString.concat(
      `... ${arr[i]} degrees C in ${i + 1} days `
    );
  }
  return forecastString;
};

console.log(printForeCast(temps1));
console.log(printForeCast(temps2));
