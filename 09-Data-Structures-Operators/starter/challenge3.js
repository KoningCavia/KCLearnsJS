'use strict';

const gameEvents = new Map([
 [17, '⚽ GOAL'],
 [36, '� Substitution'],
 [47, '⚽ GOAL'],
 [61, '� Substitution'],
 [64, '� Yellow card'],
 [69, '� Red card'],
 [70, '� Substitution'],
 [72, '� Substitution'],
 [76, '⚽ GOAL'],
 [80, '⚽ GOAL'],
 [92, '� Yellow card'],
 ]);

//      1. Create an array 'events' of the different game events that happened (no
//     duplicates)
console.log([...gameEvents.values()]);

//step by step version
const eventsSet = new Set([...gameEvents.values()])
const events = [eventsSet];
console.log(events);
//short version :)
console.log([new Set([...gameEvents.values()])]);

//     2. After the game has finished, is was found that the yellow card from minute 64
//     was unfair. So remove this event from the game events log.
console.log(gameEvents);

gameEvents.delete(64);
console.log(gameEvents);


//     3. Compute and log the following string to the console: "An event happened, on
//     average, every 9 minutes" (keep in mind that a game has 90 minutes)


let timeAverage = 90/gameEvents.size;

console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`);

//     4. Loop over 'gameEvents' and log each element to the console, marking
//     whether it's in the first half or sec

let timeSum = 0;
// for (const [time, event] of gameEvents) {


for (const [time, event] of gameEvents) {
    time > 45 ? console.log('second half', time, event ) :  console.log('first half', time, event);
};

for (const[key, value] of question) {
    if (typeof key=== 'number') {
      console.log(`Answer ${key}: ${value}`);
    }};