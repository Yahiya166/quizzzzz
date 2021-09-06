var ques = document.getElementById('ques');
var opt = document.getElementById('opt');
var currentQuestion = document.getElementById('currentQuestion');
var totalQuestion = document.getElementById('totalQuestion');

var arr = [{
    question: "HTML stands for  ____________",
    option: ['Hyper Text Mark Up Language', 'Haaperr Tittle Marks Up Language', 'Hypar Text Merk Up Languege', 'Hidrogen Text Mark Up Language'],
    correctoption: 'Hyper Text Mark Up Language'
}, {
    question: "How many headings in html ____________",
    option: ['3', '5', '6'],
    correctoption: '6'
}, {
    question: "para is ___________",
    option: ['inline', 'block', 'horizental', 'vertical'],
    correctoption: 'block'
}, {
    question: "Which character is used to indicate an end tag?",
    option: ['^', '/', '<', '*'],
    correctoption: '/'
}, {
    question: "Who is making the Web standards?",
    option: ['Google', 'Microsoft', 'The World Wide Web Consortium', 'Mozila'],
    correctoption: 'The World Wide Web Consortium'
}, {
    question: "Choose the correct HTML element for the largest heading:",
    option: ['<h1>', '<heading>', '<head>', '<h6>'],
    correctoption: '<h1>'
}, {
    question: "What is the correct HTML element for inserting a line break?",
    option: ['<br />', '<lb>', '<break>'],
    correctoption: '<br />'
}, {
    question: "Choose the correct HTML element to define important text",
    option: ['<i>', '<strong>', '<important>', '<b>'],
    correctoption: '<b>'
}, {
    question: "Choose the correct HTML element to define emphasized text",
    option: ['<italic>', '<em>', '<i>'],
    correctoption: '<em>'
}, {
    question: "What is the correct HTML for creating a hyperlink?",
    option: ["<a href='https://www.w3school.com'>W3Schools</a>", "<a name='https://www.w3school.com'>W3Schools</a>", "<a URL='https://www.w3school.com'>W3Schools</a>"],
    correctoption: "<a href='https://www.w3school.com'>W3Schools</a>"
}]

var score = 3;

function startQuiz() {
    currentQuestion.innerHTML = score + 1;
    totalQuestion.innerHTML = arr.length;
    ques.innerHTML = arr[score].question;
    opt.innerHTML = '';

    for (var i = 0; i < arr[score].option.length; i++) {
        opt.innerHTML += `<div class="col-md-6 text-center my-2 ">
     <button type="button" class="btn btn1 text-white darkBackground fs-4 py-3 w-75 mt-3" onclick="click(${arr[score].option[i]},${arr[score].correctoption})"> ${arr[score].option[i]} </button>
        </div>`
    }

}

startQuiz()