let questions = [
    {
        id: 0,
        text: 'Which heading tag should only be used once per page?',
        choices: [
            'p',
            'heading',
            'data',
            'h1'
        ],
        answer: 'h1',
    },
    {
        id: 1,
        text: 'Which HMTL5 tag should be used for groups of navigational links?',
        choices: [
            'header',
            'main',
            'navigation',
            'nav'
        ],
        answer: 'nav',
    },
    {
        id: 2,
        text: 'Which variable declaration is used for values likely to change?',
        choices: [
            'var',
            'variable',
            'const',
            'let'
        ],
        answer: 'let',
    },
];

let currentQuestionIndex;
let questionsDisplayed = 0;
const questionText = document.querySelector('#question-text');
const answerContainer = document.querySelector('#answer-container');
const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector('#answer2');
const answer3 = document.querySelector('#answer3');
const answer4 = document.querySelector('#answer4');
const questionsDisplayedSpan = document.querySelector('#questions-displayed');
const notificationTextH3 = document.querySelector('#notification-text');


    // ______Load Questions from the Question Array_____

function loadQuestion(questionObj = questions[0]) {
    notificationTextH3.innerText = '';
    document.querySelector('#next').classList = '';

    questionText.innerText = questionObj.text;

    answer1.innerText = questionObj.choices[0];
    answer2.innerText = questionObj.choices[2];
    answer3.innerText = questionObj.choices[1];
    answer4.innerText = questionObj.choices[3];

    answerContainer.setAttribute('data-correct-answer', questionObj.answer);

    currentQuestionIndex === undefined ? currentQuestionIndex = 0 : currentQuestionIndex++;
}


    // ______Control the Questions Displayed Text_____

function advanceQuestionCount() {
    questionsDisplayed++;
    questionsDisplayedSpan.innerText = questionsDisplayed;


    // ______Check for Correct Answer______
}
function checkAnswer(e){
    const correctAnswer = answerContainer.getAttribute('data-correct-answer');

    if (e.target.innerText === correctAnswer) {
        notificationTextH3.innerText = 'Well Done! Correct!';
        document.querySelector('#next').classList.toggle('next_show');
    } else {
        notificationTextH3.innerText = 'Sorry :( Try Again!';
    }
}

answerContainer.addEventListener('click', checkAnswer);
document.querySelector('#next').addEventListener('click', function(){
    if (currentQuestionIndex < questions.length - 1) {
        loadQuestion(questions[currentQuestionIndex + 1]);
        advanceQuestionCount();
    } else {
        notificationTextH3.innerText = 'All Done';
        document.querySelector('#next').classList = '';
    }
});


    // ______Initiate Page with First Question______

loadQuestion();
advanceQuestionCount();

