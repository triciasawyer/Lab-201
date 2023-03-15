'use strict';
console.log('app file is working');


//let userName;

//while(!userName) {
// userName = prompt('Hello, What is your name');
//}

let userPoints = 0;
//console.log("🚀 ~ file: app.js:5 ~ userPoints:", userPoints);

let whatName = prompt('Hello, what is your name?');
//console.log("🚀 ~ file: index.html:34 ~ whatName:", whatName);
alert('Nice to meet you ' + whatName + ', welcome to my website!');
alert('Here is a quick game of questions About Me. Just answer yes or no!');

let favSport = prompt('Is my favorite sport basketball?').toLowerCase().trim();
//console.log("🚀 ~ file: index.html:36 ~ favSport:", favSport);
if (favSport === 'no' || favSport === 'n') {
  alert('Your right! My favorite sport is baseball.');
} else if (favSport === 'yes' || favSport === 'y') {
  alert('Wrong! I like baseball.');
}
userPoints++;


let onlyChild = prompt('Am I an only child?').toLowerCase().trim();
//console.log("🚀 ~ file: index.html:36 ~ onlyChild:", onlyChild);
if (onlyChild === 'no' || onlyChild === 'n') {
  alert('You got it! I do have 3 siblings.');
} else if (onlyChild === 'yes' || onlyChild === 'y') {
  alert('Wrong! I actually have 3 siblings.');
}

let anyPets = prompt('Do I have any pets?').toLowerCase().trim();
//console.log("🚀 ~ file: index.html:38 ~ anyPets:", anyPets);
if (anyPets === 'no' || anyPets === 'n') {
  alert('Correct! I sadly do not have any pets.');
} else if (anyPets === 'yes' || anyPets === 'y') {
  alert('Nope!');
}

let inAliens = prompt('Do I believe in aliens?').toLowerCase().trim();
//console.log("🚀 ~ file: index.html:40 ~ inAliens:", inAliens);
if (inAliens === 'yes' || inAliens === 'y') {
  alert('Oh yeah! I definitely do');
} else if (inAliens === 'no' || inAliens === 'n') {
  alert('Wrong! Aliens are real.');
}

let guessNumber = prompt('Guess a number, 1-10! You get three tries.');
//console.log("🚀 ~ file: app.js:54 ~ guessNumber:", guessNumber);
if (guessNumber <4) {
  alert('Too low! Guess again. You have two more tries.');
} else if (guessNumber >6) {
  alert('Too high! Guess again. You have one more try.');
} else if (guessNumber === 5) {
  alert('You guessed my number! Good job.');
}

alert('Thanks for playing my About Me game ' + whatName + '!');

while userLog = 0;