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

// //     1. Create one player array for each team (variables 'players1' and
// // 'players2')

// //create empty arrays
// // let players1;
// // let players2;

// // game.players is an array containing two arrays.
// [players1, players2] = game.players;
// console.log(players1);
// console.log("-----------------");
// console.log(players2);


// // 2. The first player in any player array is the goalkeeper and the others are field
// // players. For Bayern Munich (team 1) create one variable ('gk') with the
// // goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// // field players

// // gk takes a single value, fieldplayers is an array which takes everything that is left.
// [gk, ...fieldPlayers] = players1;

// console.log(gk);
// console.log(fieldPlayers);



// // 3. Create an array 'allPlayers' containing all players of both teams (22
// // players)

// //Both methods here do the same thing.
// allPlayers = [...players1, ...players2, 'CAVIAAAA'];
// [...allPlayers2] = [...players1, ...players2, 'CAVIAAAA'];


// console.log(allPlayers);


// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// // new array ('players1Final') containing all the original team1 players plus
// // 'Thiago', 'Coutinho' and 'Perisic'

// players1Final = [...players1, 'Thiago', 'Couthino', 'Perisic']
// console.log(players1Final);

// // 5. Based on the game.odds object, create one variable for each odd (called
// // 'team1', 'draw' and 'team2')
// // {} normall depicts a code block. So to destructure an object you need to wrap the entire call in () (haakjes).
// ({team1, x, team2} = game.odds)
// console.log(team1,x,team2);

// // 6. Write a function ('printGoals') that receives an arbitrary number of player
// // names (not an array) and prints each of them to the console, along with the
// // number of goals that were scored in total (number of player names passed in)

// ...scoringPlayers is not an Array here. Just a list of values.
// game.printGoals= function(...scoringPlayers){
//     console.log(scoringPlayers);
//     console.log(scoringPlayers.length);
// }

// game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')

// // 7. The team with the lower odd is more likely to win. Print to the console which
// // team is more likely to win, without using an if/else statement or the ternary
// // operator.

// //needs to return the value of the team name. 
// // so a teamname should bu truthy or falsy.

// console.log(team1>team2 ?? team2>team1 ?? team2==team1);

// // Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// // Then, call the function again with players from game.scored

