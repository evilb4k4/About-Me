'use strict';
var userScore = 0;
//yesNoQuestion
function storiesQuestion() {

  var question1 = prompt('Do you like scary stories?');
  if (question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'y') {
    alert('BOO! (it\'s a short story)');
    userScore++;
  } else if (question1.toLowerCase() === 'no' || question1.toLowerCase() === 'n') {
    alert('It\'s your loss.');
  } else {
    alert('No need to get scared and start typing out control');
  }
}
storiesQuestion();

function rainQuestion() {
  var question2 = prompt('Is it raining outside?');
  if (question2.toLowerCase() === 'yes' || question2.toLowerCase() === 'y') {
    alert('That Seattle for you.');
    userScore++;
  } else if (question2.toLowerCase() === 'no' || question2.toLowerCase() === 'n') {
    alert('What are doing inside go get some sun before it runs away');
  } else {
    alert('Simple yes or no question.');
  }
}
rainQuestion();

function theBatman() {
  var question3 = prompt('Do you like Batman?');
  if (question3.toLowerCase() === 'yes' || question3.toLowerCase() === 'y') {
    alert('Batman is awesome!.');
    userScore++;
  } else if (question3.toLowerCase() === 'no' || question3.toLowerCase() === 'n') {
    alert('Hater');
  } else {
    alert('Simple yes or no question.');
  }
}
theBatman();

function tacos() {
  var question4 = prompt('Do you like tacos?');
  if (question4.toLowerCase() === 'yes' || question4.toLowerCase() === 'y') {
    alert('Tacos are the best');
    userScore++;
  } else if (question4.toLowerCase() === 'no' || question4.toLowerCase() === 'n') {
    alert('More tacos for me then');
  } else {
    alert('Simple yes or no question.');
  }
}
tacos();

function videoGames() {
  var question5 = prompt('Do you play video game?');
  if (question5.toLowerCase() === 'yes' || question5.toLowerCase() === 'y') {
    alert('Video games are my favorite pass time');
    userScore++;
  } else if (question5.toLowerCase() === 'no' || question5.toLowerCase() === 'n') {
    alert('It okay we all can\'t be cool');
  } else {
    alert('Simple yes or no question.');
  }
}
videoGames();

//question 6
var correctGuess = false;

function kids() {
  for (var x = 4; x > 0 && !correctGuess; x--) {
    var question6 = prompt('Can you guess how many kids I have?');
    var parsed = parseInt(question6);
    if (parsed === 2) {
      alert('You\'re spot on! I have 2 boys');
      correctGuess = true;
      userScore++;
    } else if (parsed < 2) {
      alert('Too low');
    } else if (parsed > 2) {
      alert('Too high');
    } else {
      alert('That\'s not an answer!');
    }
  }
}
kids();

//Question 7

var newArray = ['England','Mexico','Germany','Korea', 'Turkey','Russia'];
var countryGuess = false;

for (var i = 0; i < 6 && !countryGuess; i++){
  var question7 = prompt('Can you guess what country I\'ve travel to while in the military?');
  for (var u = 0; u < newArray.length; u++){
    if (question7.toLowerCase() === newArray[u].toLowerCase()) {
      console.log('first loop works', question7);
      alert('Correct!');
      countryGuess = true;
      userScore++;
    }
  }
}
if (countryGuess === false){
  alert('Hint: One of the countries is connected to the USA');

}
countriesLived();

alert('Your score is ' + userScore + ' out of 7');
