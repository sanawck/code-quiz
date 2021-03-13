let timer ; 
let questionIndex = 0;
let time = 60;

//all the variables created
const questionsElem = document.querySelector('#questions'); 
const choiceElem = document.getElementById('multichoices');
let submitInitialsBtn = document.getElementById('submit-initials');
let startBtn = document.getElementById('start-button');
let playersInitialsElem = document.getElementById('players-initials');
let answerAccuracyElem = document.getElementById('answer-accuracy');
let remaintingtimeElem = document.getElementById('remaining-time');
let endscreenElem = document.getElementById('endscreen');
let finalScoreElem = document.getElementById('finalscore');
