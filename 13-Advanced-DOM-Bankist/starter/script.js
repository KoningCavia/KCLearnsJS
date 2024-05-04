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





//-------------------------------------------------------------------------------------------

//187 SELECTING CREATING AND DELETING ELEMENTS

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


//188 STYLES ATTRIBUTES AND CLASSES


//styles

//setting a html style in js. 'element'.style.'stylename' = 'stringwithvalue'

message.style.backgroundColor = '#37383d';
message.style.width = '120%';
//note that this is implemented as 'inline' styles
// that also mean that we can only retrieve inline styles with this method. not styles from a css file 
console.log(message.style.height);    //this wont work. This is not an inlinestyle
console.log(message.style.backgroundColor);   //this will work. This is an inline style

console.log(getComputedStyle(message).color); // this is used to rerieve any style from an element

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10)+ 40 + 'px';


//CSS custom properties / CSS variables
//basically the magical numbers. the #color.prorail-grey-lighter
//they are like js variables but for css. And like these are used to set styling properties all over your application. So it can be used to change styling all over the place (in stead of changing each element one by one)
//ie you can change these global styles as easily as a elements style

//Remember document.documentElement selects the entire dom/highest level.
document.documentElement.style.setProperty('--color-primary', 'orangered');


//ATTRIBUTES
//        <img
// src="img/logo.png"
// alt="Bankist logo"
// class="nav__logo"
// id="logo"
// designer="Jonas"
// data-version-number="3.0"
// />

//all of these are html attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.className);   // this returns the class as a string. you could expect this to be class. but for historical reasons it must be className
console.log(logo.alt);    // this 'get's value of the alt attribute
console.log(logo.src);    // gets value of src attribute
logo.alt='Beautiful minimalist logo';   //sets value of alt    

//this works because they are standard attributed on an image

//NON-STANDARD attributes
// however if we try this with custom attributes..
 console.log(logo.designer);    //doesnt work

 //but it can be done like so:
 console.log(logo.getAttribute('designer'));    //get attribute
logo.setAttribute('company', 'Bankist');        //set attribute. In this case company didnte ven exist. but now it does!

console.log(logo.src);      //returns absolute path
console.log(logo.getAttribute('src'));  //gets relative path. Sometimes we really need the relative path. So use this one.

const link = document.querySelector('.nav__link--btn');
console.log(link.href);     // absolute path
console.log(link.getAttribute('href')); //url as it was written in the html

//DATA ATTRIBUTES
//speciala ttributed that start with the word data. its not explained why
console.log(logo.dataset.versionNumber);


//CLASSES
logo.classList.add('c');      // add class
logo.classList.remove('c');   //remove class
logo.classList.toggle('c');   //toggle class
logo.classList.contains('c'); //does it contain?