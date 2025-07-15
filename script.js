const questions = [
    {
        question: "What planet is known as the Red Planet?",
        options: ["Earth", "Venus", "Mars", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
        answer: "Tokyo"
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "C++", "HTML", "Swift"],
        answer: "HTML"
    },
    {
        question: "Which animal is the largest mammal?",
        options: ["Elephant", "Whale Shark", "Blue Whale", "Giraffe"],
        answer: "Blue Whale"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].answer) {
        score++;
        alert("Correct!");
    } else {
        alert(`Wrong! Correct answer was ${questions[currentQuestion].answer}`);
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").innerText = `You scored ${score} out of ${questions.length}`;
        document.getElementById("options").innerHTML = "";
    }
}

window.onload = loadQuestion;
