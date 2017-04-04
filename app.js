'use strict';

function yesNoQuestion (){
  var question1 = prompt('Do you like scary stories?');
  if (question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'y') {
    alert('BOO! (it\'s a short story)');
    userScore++;
  } else if (question1.toLowerCase() === 'no' || question1.toLowerCase() === 'n') {
    alert('It\'s your loss.');
  } else {
    alert('No need to get scared and start typing out control');
  }

  var question2 = prompt('Is it raining outside?');
  if (question2.toLowerCase() === 'yes' || question2.toLowerCase() === 'y') {
    alert('That Seattle for you.');
    userScore++;
  } else if (question2.toLowerCase() === 'no' || question2.toLowerCase() === 'n') {
    alert('What are doing inside go get some sunny before it runs away');
  } else {
    alert('Simple yes or no question.');
  }

  var answer = prompt('Do you like Batman?');
  if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
    alert('Batman is awesome.');
    userScore++;
  } else if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
    alert('Hater');
  } else {
    alert('Simple yes or no question.');
  }

  var answer = prompt('Do you like tacos?');
  if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
    alert('Tacos are awsome!');
    userScore++;
  } else if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
    alert('More tacos for me then');
  } else {
    alert('Simple yes or no question.');
  }

  var answer = prompt('Do you play video game?');
  if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
    alert('Video games are my favorite pass time');
    userScore++;
  } else if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
    alert('It okay we all can\'t be cool');
  } else {
    alert('Simple yes or no question.');
  }
}
yesNoQuestion();
