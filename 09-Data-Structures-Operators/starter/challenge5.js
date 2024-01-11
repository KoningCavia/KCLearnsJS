"use strict";

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  //make the above look like the below


// 🔴 Delayed Departure from FAO to TXL (11h25)
            //  Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

console.log('-------------------METHOD 1-------------------');

const flightsArray = flights.split('+');



for (const flight of flightsArray) {
    const flightElements = flight.split(';');

    let timing = flightElements[0].split('_');
    if (timing.length>2) {
        timing = '🔴 ' + timing.join(' ')
    } else {
        timing = timing.join(' ')
    }
    const departCode = flightElements[1].slice(0, 3).toUpperCase();
    const arriveCode = flightElements[2].slice(0, 3).toUpperCase();
    const time = flightElements[3].replace(':', 'h');
    const message = `${timing} from ${departCode} to ${arriveCode} (${time})`.padStart(45, ' ')
    console.log(message);
}


//second method. destructuring and processing directly in the string.
console.log('-------------------METHOD 2-------------------');

for (const flight of flights.split('+')) {

const [type, from, to, time] = flight.split(';');


console.log(`${type.startsWith('_Delayed')? '🔴' : ''}${type.replaceAll('_', ' ')} from ${from.slice(0,3).toUpperCase()} to ${to.slice(0,3).toUpperCase()} (${time.replace(':', 'h')})`.padStart(45));
}