// Quiz based on example from https://www.sitepoint.com/simple-javascript-quiz/

const quizContainer = document.getElementById('quiz')
const resultsContainer = document.getElementById('results')
const submitButton = document.getElementById('submit')

// add the questions for the quiz
const myQuestions = [
    {
    question: "Which landscape do you prefer?",
    answers: {
        a: "Mountains",
        b: "Water",
        c: "Trees",
        d: "City view",
    },
   {
    question: "Which sounds excite you",
    answers: {
        a: "People burble",
        b: "Quiet",
        c: "Breeze through grass",
        d: "Music",
   },
   {
    question: "Which situation excites you",
    answers: {
        a: "Meeting a friend for coffee",
        b: "Meeting new people",
        c: "Hanging out with family",
        d: "A surprise visit by someone",
   },
];

function buildQuiz(){ }

function showResults(){ }


buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

