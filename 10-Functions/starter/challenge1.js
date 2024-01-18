'use strict';


// A Closer Look at Functions
// Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:

// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    };
const Data1 = [5, 2, 3]
const Data2 = [1, 5, 3, 9, 6, 1]

console.log(poll);


// button method
const registerNewAnswer = function () {

    // let answerType;
    // let pollResult;
    const questionPrompt = [];              // create empty prompt
    questionPrompt.push(poll.question)      // add question to prompt
    for (const answer of poll.options) {        // add each option to prompt
        questionPrompt.push(answer)
    }
    const questionPromptDef = questionPrompt.join('\n')     // turn prompt array in string
    
    // This do While-Loop shows prompt, takes an answer and checks if the answer is valid and reacts by incrementing associated poll answer or alerting user.
    let currentAnswer;   

    do {
        currentAnswer = prompt(questionPromptDef);
        if (checkNumberValid(currentAnswer)) {
            alert("Invalid input. Please enter a valid number between 0 and 3.")
        } else {
            poll.answers[currentAnswer]++
     }} while (checkNumberValid(currentAnswer))

     const answerType = typeof poll.answers;
     const pollResult = poll.answers;
     const functionForType = displayResults(answerType);
     console.log(functionForType);
     functionForType(pollResult);

    //  console.log(`after answering ${poll.answers}`);        //little log for checking answer
};  

//This method checks if a number is a valid apoll answer
const checkNumberValid = function(number) {
    if(number === null || number.trim() === "" || isNaN(number)|| number < 0 || number > 3) {
        return true;
    } else {return false}

}

const displayResults = function(type = 'object') {
    if (type === 'string') {
        return displayResultsString;
    } else if (type === 'object') {
        return displayResultsArray;
    }
};

const displayResultsArray = function(resultArray) {
    console.log('You made it to the end of the array results');
    console.log(resultArray);
};

const displayResultsString = function(resultString) {
    console.log(`Poll results are ${resultString}`);
};



document.querySelector('.poll').addEventListener('click', registerNewAnswer )
console.log("Down here is Data 1    ARRAY METHOD");
displayResults(typeof(Data1))(Data1);


console.log(`\n\n\n`);
console.log("Down here is Data 1    STRING METHOD:");
const stringData1 = Data1.toString();
displayResults(typeof(stringData1))(stringData1);


console.log(`\n\n\n`);
console.log("Down here is Data 2    ARRAY METHOD");
displayResults(typeof(Data2))(Data2);


console.log(`\n\n\n`);
console.log("Down here is Data 2    STRING METHOD:");
const stringData2 = Data2.toString();
displayResults(typeof(stringData2))(stringData2);

// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
    // 1. Make sure to check if the input is a number and if the number makes
    // sense (e.g. answer 52 wouldn't make sense, right?)
    // DONE


// 2. Call this method whenever the user clicks the "Answer poll" button.
// DONE


// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".


// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.


// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?
// The Complete JavaScript Course 21
// Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]
// Hints: Use many of the tools you learned about in this and the last section �
// GOOD LUCK �


