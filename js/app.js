'use strict';
console.log('app file is working');


//let userName;

//while(!userName) {
// userName = prompt('Hello, What is your name');
//}


let userPoints = 0;
console.log('🚀 ~ file: app.js:5 ~ userPoints:', userPoints);


let whatName = prompt('Hello, what is your name?');
console.log('🚀 ~ file: index.html:34 ~ whatName:', whatName);
alert('Nice to meet you ' + whatName + ', welcome to my website!');
alert('Here is a quick game of questions About Me. Just answer yes or no!');

let favSport = prompt('Is my favorite sport basketball?').toLowerCase().trim();
console.log('🚀 ~ file: index.html:36 ~ favSport:', favSport);
if (favSport === 'no' || favSport === 'n') {
  alert('Your right! My favorite sport is baseball.');
  userPoints++;
} else if (favSport === 'yes' || favSport === 'y') {
  alert('Wrong! I like baseball.');
}

let onlyChild = prompt('Am I an only child?').toLowerCase().trim();
console.log('🚀 ~ file: index.html:36 ~ onlyChild:', onlyChild);
if (onlyChild === 'no' || onlyChild === 'n') {
  alert('You got it! I do have 3 siblings.');
  userPoints++;
} else if (onlyChild === 'yes' || onlyChild === 'y') {
  alert('Wrong! I actually have 3 siblings.');
}

let anyPets = prompt('Do I have any pets?').toLowerCase().trim();
console.log('🚀 ~ file: index.html:38 ~ anyPets:', anyPets);
if (anyPets === 'no' || anyPets === 'n') {
  alert('Correct! I sadly do not have any pets.');
  userPoints++;
} else if (anyPets === 'yes' || anyPets === 'y') {
  alert('Nope!');
}

let inAliens = prompt('Do I believe in aliens?').toLowerCase().trim();
console.log('🚀 ~ file: index.html:40 ~ inAliens:', inAliens);
if (inAliens === 'yes' || inAliens === 'y') {
  alert('Oh yeah! I definitely do');
  userPoints++;
} else if (inAliens === 'no' || inAliens === 'n') {
  alert('Wrong! Aliens are real.');
}

//It should give the user exactly four opportunities to get the correct answer.
//After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.



let attempts = 0;
while(attempts < 4){
  attempts++;
  let guessNumber = prompt('Guess a number, 1-10! You get four tries.');
  console.log('🚀 ~ file: app.js:54 ~ guessNumber:', guessNumber);
  if (guessNumber <= 4) {
    alert('Too low! Guess again.');
  } else if (guessNumber >= 6) {
    alert('Too high! Guess again.');
  } if (guessNumber === 5) {
    alert('You guessed the correct number, ' + guessNumber + '! Good job.');
    break;
  }
  alert('Man! The correct answer was 5!');
}


//Give the user 6 attempts to guess the correct answer.
//The guesses will end once the user guesses a correct answer or they run out of attempts.

let chances = 0;
while(chances < 6){
  chances++;
  let multiAnswer = prompt('What states have I traveled to? You get six attempts.').toLowerCase().trim();
  console.log('🚀 ~ file: app.js:65 ~ multiAnswer:', multiAnswer);

  let statesTraveled = ['Texas', 'Hawaii', 'New Mexico', 'Ohio', 'California', 'Oregon', 'Nebraska', 'Missouri', 'Minnesota', 'Oklahoma', 'Kansas', 'North Dakota', 'South Dakota', 'Illinois'];
  console.log('🚀 ~ file: app.js:74 ~ statesTraveled:', statesTraveled);
  if (statesTraveled === statesTraveled) {
    alert('You guessed one of the states I have traveled too! Well done.');
  }
  
  for(let i = 0; i < statesTraveled.length; i++){
    console.log('traveled', statesTraveled[i]);
  }
}




alert('Thanks for playing my About Me game ' + whatName + '!');

//while userLog = 0;
