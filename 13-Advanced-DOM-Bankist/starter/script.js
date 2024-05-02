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
header.append(message);