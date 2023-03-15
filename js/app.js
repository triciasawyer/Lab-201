'use strict';
console.log('app file is working');



let whatName = prompt('What is your name?');
//console.log("🚀 ~ file: index.html:34 ~ whatName:", whatName);
alert('Nice to meet you ' + whatName + ', welcome to my website!');


let onlyChild = prompt('Am I an only child?').toLowerCase();
//console.log("🚀 ~ file: index.html:36 ~ onlyChild:", onlyChild);
if (onlyChild === 'no' || onlyChild === 'n') {
  alert('You got it! I do have 3 siblings.');
} else if (onlyChild === 'yes' || onlyChild === 'y') {
  alert('Wrong! I actually have 3 siblings.');
}

let anyPets = prompt('Do I have any pets?').toLowerCase();
//console.log("🚀 ~ file: index.html:38 ~ anyPets:", anyPets);
if (anyPets === 'no' || anyPets === 'n') {
  alert('Correct! I sadly do not have any pets.');
} else if (anyPets === 'yes' || anyPets === 'y') {
  alert('Nope!');
}

let inAliens = prompt('Do I believe in aliens?').toLowerCase();
//console.log("🚀 ~ file: index.html:40 ~ inAliens:", inAliens);
if (inAliens === 'yes' || inAliens === 'y') {
  alert('Oh yeah! I definitely do');
} else if (inAliens === 'no' || inAliens === 'n') {
  alert('Wrong! Aliens are real.');
}

alert('Thanks for playing my About Me game ' + whatName + '!');
