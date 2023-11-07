'use strict';
/*

// CHALLENGE 1 & 2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);


if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}

*/


/*

//Challenge 3

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy")
} if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy")
} else { "Both win the trophy" }

*/

/*
// CHALLENGE 4

const bill = 275;

let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/


/* Write your code below. Good luck! 🙂 */

// CHALLENGE 3
const calcAverage = (score1, score2, score3) => {
    return ((score1 + score2 + score3) / 3);
}


function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        // console.log(`The dolphins win with an average score of ${avgDolphins} over the Koala's with ${avgKoalas}`)
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgDolphins) {
        // console.log(`The Koalas win with an average score of ${avgKoalas} over the dolphins with ${avgDolphins}`)
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    } else {
        console.log(`Dolphins: ${avgDolphins}. Koalas: ${avgKoalas}. Neither team won with twice or more the score of the oponent. `)
    }
}

const scoreDolphins = calcAverage();
const scoreKoalas = calcAverage();

function doItAll(team1score1, team1score2, team1score3, team2score1, team2score2, team2score3) {
    checkWinner(calcAverage(team1score1, team1score2, team1score3), calcAverage(team2score1, team2score2, team2score3));
}

// console.log(`the results for testdata1: ${doItAll(44, 23, 71, 65, 54, 49)}`);
// console.log(`the results for testdata2: ${doItAll(85, 54, 41, 23, 34, 27)}`);

checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49))
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));


// CHALLENGE 2
/* Write your code below. Good luck! 🙂 */

function calcTip(billValue) {
    if (billValue > 50 && billValue < 300) {
        return billValue * 0.15;
    } else {
        return billValue * 0.20;
    }
}

let bills = [125, 555, 44];

let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
let totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);


// CHALLENGE 3
const Mark = {
    fullName: 'Mark de Park',
    mass: 78,
    height: 1.69,
    bmi: 0,

    calcBmi: function () {
        this.bmi = (this.mass / (this.height * this.height));
        return this.bmi;
    }

}

const John = {
    fullName: "John",
    mass: 92,
    height: 1.95,
    bmi: 0,

    calcBmi: function () {
        this.bmi = (this.mass / (this.height * this.height));
        return this.bmi;
    }
}
John.calcBmi();
Mark.calcBmi();

const winner = (John.bmi > Mark.bmi) ? John : Mark;
const loser = !(John.bmi > Mark.bmi) ? John : Mark;
console.log(winner);
console.log(loser);
console.log(`${winner.fullName}'s BMI (${winner.bmi}) is higher than ${loser.fullName}'s (${loser.bmi})!`)


// JAVASCRIPT FUNDAMENTAL PART 2: CHALLENGE 4
const calcTip2 = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

let bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips2 = new Array;
let totals2 = new Array;

for (let i = 0; i < bills2.length; i++) {
    tips2.push(calcTip2(bills2[i]))
    totals2[i] = bills2[i] + tips[i];
    console.log(`your bill is: ${bills2[i]}. The suggested tip is: ${tips2[i]}. which totals to: ${totals2[i]} `)
}