//timer variables 
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

let questionsList = [
    {
        question: 'What does HTML stand for?',
        choices:['Hyper Text Markup Logo', 'Hyper Text Markup Language', 'Hyper Markup Text Language'],
        a: 'Hyper Text Markup Language'
    },
        
    {
        question: 'What does CSS stand for',
        choices: ['Cascading Style Sheet', 'Cascading Section Style', 'C++'],
        a: 'Cascading Style Sheet'
        
    },

    {   
        question: 'Which format is acceptable to create a variable in Javascipt',
        choices :['HTML', 'let', '.*'],
        a:'let'

    },
    {
        question: 'What is an array in Javascript?',
        choices: ['Ordered List of Values','class id', 'Boolean'],
        a: 'Ordered List of Values'
    }
];   
//the elements that wont change (the score total and amount of questions)
const score_points = 80
const max_questions = 4

startPageElem = document.getElementById('home');
//functions - telling the game to start game and start timer
startGame = () => {
    startPageElem.setAttribute('class', 'hidden');
    questionsElem.removeAttribute('class');
    timer = setInterval(tick, 1000);
    remaintingtimeElem.textContent = time;

}

function saveInitials () {
    //to be coded
}

function saveScore () {
    //to be coded
}

function tick () {
    time -- ; 
    remaintingtimeElem.textContent = time;
    if (time <= 0 ){
    endQuiz ();
    }
}
function endQuiz () {
    clearInterval(timer);
    endscreenElem.removeAttribute('class');
    finalScoreElem.textContent = time;
    questionsElem.setAttribute('class', 'hidden');
}

startBtn.onclick = startGame;

playersInitialsElem.onkeyup = saveInitials;

submitInitialsBtn.onclick = saveScore;
