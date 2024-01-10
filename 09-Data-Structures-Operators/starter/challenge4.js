"use strict";


// Write a program that receives a list of variable names written in underscore_case 
// and convert them to camelCase. 
// The input will come from a textarea inserted into the DOM (see code below to 
// insert the elements), and conversion will happen when the button is pressed. 
// Test data (pasted to textarea, including spaces): 
    // underscore_case 
    //  first_name 
    // Some_Variable  
    //   calculate_AGE 
    // delayed_departure 
// Should produce this output (5 separate console.log outputs): 
// underscoreCase      ✅ 
// firstName           ✅✅ 
// someVariable        ✅✅✅ 
// calculateAge        ✅✅✅✅ 
// delayedDeparture    ✅✅✅✅✅ 
// Hints: 
// § Remember which character defines a new line in the textarea 😉 
// § The solution only needs to work for a variable made out of 2 words, like a_b 
// § Start without worrying about the ✅. Tackle that only after you have the variable 
// name conversion working 😉 
// § This challenge is difficult on purpose, so start watching the solution in case 
// you're stuck. Then pause and continue! 
 
// Afterwards, test with your own test data! 
 
// GOOD LUCK 😀 

  document.body.append(document.createElement('textarea')); 
  document.body.append(document.createElement('button')); 



  //create method to refactor string from textbox
  const refactorText = function() {
      //retrieve info from text box
  const str = document.querySelector('textarea').value;
// const str = "   underscore_case \n first_name \nSome_Variable  \n  calculate_AGE \n delayed_departure  ";

  console.log(str);

    //remove spaces


    // toLowerCap
    let strLower = str.toLowerCase();

    //split text by '\n' (put in aray?), into 5 elements

    //split each element into 2

    // capitalize second word of each element

    // join two words of each element

    // use for loop to log.consol each element to console

    // add increasingly more smileys per element in the for loop.

    console.log("hiephoi");
    console.log(strLower);
    //
  }


  //add listener to button
  const button = document.querySelector('button')
  button.addEventListener('click', refactorText); 


// const str = "   underscore_case \n first_name \nSome_Variable  \n  calculate_AGE \n delayed_departure  ";

// console.log("Original String:");
// console.log(/str/);

// const strTrimmed = str.trim();  

// console.log("Trimmed String:");
// console.log(strTrimmed);
// const textareaContent = document.querySelector('textarea').value;
// console.log(textareaContent);
