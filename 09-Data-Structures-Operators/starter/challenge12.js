const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
    };

//     4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }

    // 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names �

let threeStr = '';
for (const [oddTeamName, OddValue] of Object.entries(game.odds)) {
    if (oddTeamName === 'x') {
        threeStr += `odd of draw: ${OddValue}\n`;
    } 
    for (const [teamNr, teamName] of Object.entries(game)) {
        if (teamNr == oddTeamName){
        threeStr += `Odd of ${teamName}: ${OddValue}\n`;
        }

    }
}
console.log(threeStr);

// Solution 2
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
    console.log(`Odd of ${teamStr}: ${odd}`);
}



// let threeStr = '';
// for (const [teamNr, teamName] of Object.entries(game)) {


// }

    // 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")


// Dit werkt maar is wat onhandig want de index wordt zo een string.
for( const [nr, scoringPlayer] of Object.entries(game.scored)) {
    let nrActual = parseInt(nr)+1;
    
    console.log(`Goal ${nrActual}: ${scoringPlayer}`);
}

// hier werkt het ook maar op deze maniet is de index een nr (dus beter)
for (const [i, scPl] of game.scored.entries()) {
    console.log(`222 Goal ${i+1}: ${scPl}`);
}


// 2. Use a loop to calculate the average odd and log it to the console (We already
//     studied how to calculate averages, you can go check if you don't remember)

let oddSum = 0;
let oddCounter = 0;
for( odd of Object.values(game.odds)) {
    oddSum += odd;
    oddCounter += 1;
}
oddAverage = oddSum/oddCounter;
console.log('oddaverage:', oddAverage);




//  Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')

let [players1, players2] = game.players;

console.log(players1, players2);


// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players

let [gk, ...fieldPlayers] = players1;
// let [gk, fieldPlayers] = game.players[0];    // same result
let [gk2, fieldPlayers2] = players2;

console.log(gk, fieldPlayers);

// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)

let [...allPlayers] = [...players1, ...players2];

console.log('3', allPlayers);



// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'

let [...players1Final] = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);


// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')

let {team1, x:draw, team2} = game.odds;
console.log('5', team1, draw, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// not that you dont need to loop with this method.
game.printGoals = function(...scoringPlayers) {
    console.log('6', scoringPlayers);
    console.log(scoringPlayers.length);
}

game.printGoals('appie', 'harry', 'Hendrix');

// function game.printGoals(...scoringPlayers) {

// }


// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski




