'use strict';
console.log('app file is working');


let userPoints = 0;
console.log('🚀 ~ file: app.js:5 ~ userPoints:', userPoints);


let whatName = prompt('Hello, what is your name?');
console.log('🚀 ~ file: index.html:34 ~ whatName:', whatName);
alert('Nice to meet you ' + whatName + ', welcome to my website!');
alert('Here is a quick game of questions About Me. Just answer yes or no!');


function runSport(){
  let favSport = prompt('Is my favorite sport basketball?').toLowerCase().trim();
  console.log('🚀 ~ file: index.html:36 ~ favSport:', favSport);
  if (favSport === 'no' || favSport === 'n') {
    alert('Your right! My favorite sport is baseball.');
    userPoints++;
  } else if (favSport === 'yes' || favSport === 'y') {
    alert('Wrong! I like baseball.');
  }
}
runSport();


//function runChild(){
let onlyChild = prompt('Am I an only child?').toLowerCase().trim();
console.log('🚀 ~ file: index.html:36 ~ onlyChild:', onlyChild);
if (onlyChild === 'no' || onlyChild === 'n') {
  alert('You got it! I do have 3 siblings.');
  userPoints++;
} else if (onlyChild === 'yes' || onlyChild === 'y') {
  alert('Wrong! I actually have 3 siblings.');
}

//runChild();


//function runPets(){
let anyPets = prompt('Do I have any pets?').toLowerCase().trim();
console.log('🚀 ~ file: index.html:38 ~ anyPets:', anyPets);
if (anyPets === 'no' || anyPets === 'n') {
  alert('Correct! I sadly do not have any pets.');
  userPoints++;
} else if (anyPets === 'yes' || anyPets === 'y') {
  alert('Nope!');
}

//runPets();


//function runAliens(){
let inAliens = prompt('Do I believe in aliens?').toLowerCase().trim();
console.log('🚀 ~ file: index.html:40 ~ inAliens:', inAliens);
if (inAliens === 'yes' || inAliens === 'y') {
  alert('Oh yeah! I definitely do');
  userPoints++;
} else if (inAliens === 'no' || inAliens === 'n') {
  alert('Wrong! Aliens are real.');
}

//runAliens();


//function runGuess(){
let rightNumber = 5;
let attempts = 0;
while (attempts < 4) {
  attempts++;
  let guessNumber = parseInt(prompt('Guess a number, 1-10! You get four tries.'));
  if (guessNumber <= 4) {
    alert('Too low! Guess again.');
  } else if (guessNumber >= 6) {
    alert('Too high! Guess again.');
  } if (guessNumber === rightNumber) {
    alert('You guessed the correct number, ' + guessNumber + '! Good job.');
    userPoints++;
    break;
  }
}
alert('Man! The correct answer was 5.');

//runGuess();


//function runTraveled(){
let statesTraveled = ['texas', 'hawaii', 'new nexico', 'ohio', 'california', 'oregon', 'nebraska', 'missouri', 'minnesota', 'oklahoma', 'kansas', 'north dakota', 'south dakota', 'illinois', 'iowa'];
let chances = 0;
while (chances < 6) {
  chances++;
  let multiAnswer = prompt('What states have I traveled to? You get six attempts.').toLowerCase().trim();
  console.log('🚀 ~ file: app.js:65 ~ multiAnswer:', multiAnswer);

  if (statesTraveled.includes(multiAnswer)) {
    alert('You guessed one of the states I have traveled too! Well done.');
    userPoints++;
  } else {
    alert('Nope! Never been there.');
  }
}
alert('Thanks for playing my About Me game ' + whatName + '! Your score was ' + userPoints);

//runTraveled();




// Factoring random number in guessing number game
// let randomNumber = math.random() * 10;  || gives decimal number
// let randomNumber = math.floor(math.random() * 10) + 1 ; || whole number, math.floor gives us whole number. The +1 gives us a range
// let attempt = 4;
// let question = 'guess an integer from 1-10';
// let guessNumber = parseInt(prompt(question = 'You have' + attemtps + 'try\'s to go.'))
// if they don't want to play
//if (!guessNumber){
//  break;
//}
//if (guessNumber === randomNumber) {
// alert('You guessed  the correct number, ' + randomNumber)
// }

