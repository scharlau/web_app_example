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

function buildQuiz(){ 
    // variable to store the HTML output
    const output = [];

    // for each question
    myQuestions.forEach(
        (currentQuestion, questionNumber)=> {

            // variable to store the list of possible answers
            const answers = [];

            // and for each available answer
            // these template literals use backticks ` instead of single quotes!
            for(letter in currentQuestion.answers){
                answers.push(
                    `<label>
                    <input type ="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                        </label>`
                );
            }
            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );
    // finally combine our output list into one string of HTML for the page
    quizContainer.innerHTML = output.join('');
}

function showResults(){ }


buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

