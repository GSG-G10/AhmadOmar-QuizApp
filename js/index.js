const questions = [
    {
        "id": 1,
        "question_title": "What does HTML stand for?",
        "answers": ["Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Text Markup Language", "Hyper Test Mockup Language"],
        "correct-answer": "Hyper Text Markup Language"
    },
    {
        "id": 2,
        "question_title": "Who is making the Web standards?",
        "answers": ["The World Wide Web Consortium", "Mozilla", "Microsoft", "Google"],
        "correct-answer": "The World Wide Web Consortium"
    },
    {
        "id": 3,
        "question_title": "Choose the correct HTML element for the largest heading:",
        "answers": ["<h1>", "<h6>", "<head>", "<heading>"],
        "correct-answer": "<h1>"
    },
    {
        "id": 4,
        "question_title": "What is the correct HTML element for inserting a line break?",
        "answers": ["<br>", "<break>", "<lb>", "<hr>"],
        "correct-answer": "<br>"
    },
    {
        "id": 5,
        "question_title": "What is the correct HTML for adding a background color?",
        "answers": ["<body style=\"background-color:yellow;\">", "<body bg=\"yellow\">", "<background>yellow</background>", "<bg>yellow</bg>"],
        "correct-answer": "<body style=\"background-color:yellow;\">"
    },
    {
        "id": 6,
        "question_title": "Choose the correct HTML element to define important text",
        "answers": ["<strong>", "<i>", "<b>", "<important>"],
        "correct-answer": "<strong>"
    },
    {
        "id": 7,
        "question_title": "Choose the correct HTML element to define emphasized text",
        "answers": ["<em>", "<italic>", "<i>", "<emphasize>"],
        "correct-answer": "<em>"
    },
    {
        "id": 8,
        "question_title": "Which character is used to indicate an end tag?",
        "answers": ["/", "<", "*", "^"],
        "correct-answer": "/"
    },
    {
        "id": 9,
        "question_title": "Which of these elements are all <table> elements?",
        "answers": ["<thead><body><tr>", "<table><tr><td>", "<table><tr><tt>", "<table><head><tfoot>"],
        "correct-answer": "<table><tr><td>"
    },
    {
        "id": 10,
        "question_title": "How can you make a numbered list?",
        "answers": ["<list>", "<ul>", "<ol>", "<dl>"],
        "correct-answer": "<ol>"
    }
];
const goToQuiz = document.getElementById("go-to-quiz");
const nameWindow = document.getElementById("name-window");
const exitButton = document.getElementById("exit-button");
const yourName = document.getElementById("your-name");
const startQuiz = document.getElementById("start-quiz");

const questionContent = document.getElementById("question-content");
const answers = document.getElementById("answers");
const answerContent = document.querySelectorAll(".answer-content");
const nextQuestion = document.getElementById("next-question");
const remainingQuestions = document.getElementById("remaining-questions");


goToQuiz.addEventListener("click", (e) => {
    nameWindow.style.visibility = "visible"
    nameWindow.classList.toggle("zoomIn")
});

exitButton.addEventListener("click", (e) => {
    nameWindow.classList.toggle("zoomIn")
    nameWindow.classList.toggle("zoomOut")
    setTimeout(() => {
        nameWindow.style.visibility = "hidden";
        nameWindow.classList.remove("zoomOut")
    }, 900)
});

startQuiz.addEventListener("click", (e) => {
    e.preventDefault();
    if (yourName.value != "") {
        location.href = "pages/questions.html"
    } else {
        yourName.style.border = "2px dashed red";
    }
})