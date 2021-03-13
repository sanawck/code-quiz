// //timer variables 
let timer ; 
let questionIndex = 0;
let time = 60;

//DOM selectors
const questionsElem = document.querySelector('#questions'); 
const questionAskedElem = document.querySelector('#question-asked'); 
const choiceElem = document.getElementById('multichoices');
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const rightWrong = document.querySelector('#rightWrong')
const submitInitialsBtn = document.getElementById('submit-initials');
const startBtn = document.getElementById('start-button');
const playersInitialsElem = document.getElementById('players-initials');
const answerAccuracyElem = document.getElementById('answer-accuracy');
const remaintingtimeElem = document.getElementById('remaining-time');
const gameTimer = document.querySelector('.timer')
const endscreenElem = document.getElementById('endscreen');
const finalScoreElem = document.getElementById('final-score');
const saveScoreBtn = localStorage.getItem('savescorebtn');

//questions
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
let score_points = 0
const max_questions = 4
let currentQuestion = 0

startPageElem = document.getElementById('home');
//functions - telling the game to start game and start timer
startGame = () => {
    // startPageElem.setAttribute('class', 'hidden');
    // questionsElem.removeAttribute('class');
    
    startBtn.style.display = 'none'; // HIDE START BUTTON
    questionsElem.style.display = 'block' // SHOW QUESTIONS
    // present first question and options
    questionAskedElem.innerHTML = questionsList[currentQuestion].question
    option1.innerHTML = questionsList[currentQuestion].choices[0]
    option2.innerHTML = questionsList[currentQuestion].choices[1]
    option3.innerHTML = questionsList[currentQuestion].choices[2]

    // show & start timer
    timer = setInterval(tick, 1000);
    remaintingtimeElem.textContent = time;
}

function chooseAnswer (event) {
  currentQuestion = currentQuestion + 1
  let answer;
  let foundQuestion = questionAskedElem.innerHTML;

  // which choice did they pick?
  for(let i=0; i<questionsList.length; i++) {
    if(event.target.id === 'option1') {
      answer = questionsList[i].choices[0];
    }
    if(event.target.id === 'option2') {
      answer = questionsList[i].choices[1];
    }
    if(event.target.id === 'option3') {
      answer = questionsList[i].choices[2];
    }

    if(questionsList[i].question === foundQuestion) {
      if(answer === questionsList[i].a) {
        rightWrong.innerHTML = 'correct'
        score_points = score_points + 1
      } else {
        rightWrong.innerHTML = 'wrong'
      }
    }
  }

    if(questionsList[currentQuestion] !== undefined) {
      // show the next question and options
      questionAskedElem.innerHTML = questionsList[currentQuestion].question
      option1.innerHTML = questionsList[currentQuestion].choices[0]
      option2.innerHTML = questionsList[currentQuestion].choices[1]
      option3.innerHTML = questionsList[currentQuestion].choices[2]
    } else {
      endQuiz()
    }

}

function saveInitials () {
    
}

function saveScore () {
    
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
    gameTimer.style.display = 'none'
    questionsElem.style.display = 'none'
    endscreenElem.style.display = 'block'
    finalScoreElem.innerHTML = score_points
}

// EVENT LISTNERS
startBtn.onclick = startGame;
playersInitialsElem.onkeyup = saveInitials;
choiceElem.addEventListener('click', chooseAnswer)
choiceElem.addEventListener('click', chooseAnswer)