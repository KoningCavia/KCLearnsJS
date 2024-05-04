'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



//SELECTING ELEMENTS


console.log(document.documentElement);      //select complete document
console.log(document.head);
console.log(document.body);
                                            //for these elements we dont need to add a selector

//for most elements we do however
const allSections = document.querySelectorAll('.section');    //and queryselectorAll returns (an nodelist of (i assume)) all elements that match the selector

//these are the most used selectors above here

document.getElementById('section--1')   // selects the element which's id matches the one here.   (id's are unique)
const allButtons = document.getElementsByTagName('button');    // returns ah HTML-collection of all elements with button in their name (i guess). a html collection immediately updates as the html changes. If a button is removed. this is immediately reflected in the allButtons variable. neat.
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));        //returns html collection with all elements having a class containing btn


//CREATING AND INSERTING ELEMENTS
// insertAdjacentHTML      //used in the bankist app,


const header = document.querySelector('.header');     //queryselector returns the first element that matches the selector

//first create the dom element.   The Dom element is not yet injected into the dom. It just exists for us
const message = document.createElement('div');

message.classList.add('cookie-message');
// message.textContent = ('We use cookies for improved functionality and analytics');
message.innerHTML = 'We use cookies or improved functionality and analytics. <button class="btn btn--close-cookie">Got it</button>';


header.prepend(message);
// header.append(message.cloneNode(true));   // if you wanted to add the same element twice. You have to copy it. Or else it will simply be moved. This also means that existing elements can simply be moved. How swell!

// header.before(message);   // this places the message BEFORE the header. so as a sibling, rather than a child element.
// header.after(message)   // and places it before.


// DELETE ELEMENTS
document.querySelector('.btn--close-cookie').
addEventListener('click', function(){
  message.remove      // this is very new.
  message.parentElement.removeChild(message); //this is a common method of doing the same thing. First you must select the parentelement to be able to remove the child. This is called domtraversing

})