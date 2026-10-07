/* =========================================
   NIGHT WEBSITE — JAVASCRIPT
========================================= */


/* =========================================
   SCREEN CONTROL
========================================= */

function changeScreen(currentId, nextId) {

    const currentScreen = document.getElementById(currentId);
    const nextScreen = document.getElementById(nextId);

    currentScreen.classList.remove("active");

    setTimeout(() => {
        nextScreen.classList.add("active");
    }, 500);
}


/* =========================================
   PASSWORD
========================================= */

function checkPassword() {

    const input = document.getElementById("passwordInput");
    const message = document.getElementById("passwordMessage");

    const password = input.value.trim();

    if (password === "0205") {

        message.textContent = "Access granted... ❤️";

        input.disabled = true;

        setTimeout(() => {

            changeScreen(
                "passwordScreen",
                "introScreen"
            );

        }, 1000);

    } else {

        message.textContent =
            "That's not it... try again. 🌙";

        input.value = "";

        input.classList.add("shake");

        setTimeout(() => {
            input.classList.remove("shake");
        }, 500);
    }
}


/* =========================================
   ENTER KEY FOR PASSWORD
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("passwordInput");

    input.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            checkPassword();
        }

    });

});


/* =========================================
   INTRO → QUIZ
========================================= */

function showQuiz() {

    changeScreen(
        "introScreen",
        "quizScreen"
    );

    setTimeout(() => {

        currentQuestion = 0;

        showQuestion();

    }, 600);
}


/* =========================================
   QUIZ DATA
========================================= */

const questions = [

    {
        question: "What would I choose for a perfect evening?",
        
        answers: [
            "🌃 Going for a walk",
            "🎬 Watching a movie",
            "🍕 Having pizza together",
            "🛌 Just lying next to you"
        ],

        correct: 3,

        correctReaction:
            "Exactly. I just want you beside me. ❤️",

        wrongReaction:
            "Cute answer... but you should know me better. 🤭"
    },


    {
        question: "What makes me happiest?",
        
        answers: [
            "💰 Money",
            "📱 A new phone",
            "❤️ Spending time with you",
            "☕ Coffee"
        ],

        correct: 2,

        correctReaction:
            "You know me. It's always you. ❤️",

        wrongReaction:
            "Hmm... not quite. Try to remember us. 🌙"
    },


    {
        question: "What do I value the most between us?",
        
        answers: [
            "📸 Photos",
            "💬 Our conversations",
            "🎁 Gifts",
            "📍 The places we go"
        ],

        correct: 1,

        correctReaction:
            "Yes. I could talk to you for hours. ❤️",

        wrongReaction:
            "Not exactly... think about all our conversations."
    },


    {
        question: "What would I rather have right now?",
        
        answers: [
            "✈️ A vacation",
            "💤 A whole day of sleep",
            "🎮 A new game",
            "🫂 A long hug from you"
        ],

        correct: 3,

        correctReaction:
            "You already know the answer. 🫂❤️",

        wrongReaction:
            "Nice choice... but there's something I'd choose first."
    },


    {
        question: "Who do I want next to me?",
        
        answers: [
            "🐱 A cat",
            "🐶 A dog",
            "👻 A ghost",
            "❤️ You"
        ],

        correct: 3,

        correctReaction:
            "Obviously. You. Always you. ❤️",

        wrongReaction:
            "I'm pretty sure you know this one... 🤍"
    }

];


/* =========================================
   QUIZ VARIABLES
========================================= */

let currentQuestion = 0;

let score = 0;


/* =========================================
   SHOW QUESTION
========================================= */

function showQuestion() {

    const question = questions[currentQuestion];

    const questionNumber =
        document.getElementById("questionNumber");

    const questionText =
        document.getElementById("questionText");

    const answersContainer =
        document.getElementById("answers");

    const reaction =
        document.getElementById("reaction");


    questionNumber.textContent =
        `QUESTION ${currentQuestion + 1} / ${questions.length}`;


    questionText.textContent =
        question.question;


    reaction.textContent = "";


    answersContainer.innerHTML = "";


    question.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.className = "answer";

        button.textContent = answer;


        button.addEventListener("click", function () {

            answerQuestion(index);

        });


        answersContainer.appendChild(button);

    });

}


/* =========================================
   ANSWER QUESTION
========================================= */

function answerQuestion(selectedIndex) {

    const question = questions[currentQuestion];

    const reaction =
        document.getElementById("reaction");

    const buttons =
        document.querySelectorAll(".answer");


    buttons.forEach(button => {

        button.disabled = true;

    });


    if (selectedIndex === question.correct) {

        score++;

        reaction.textContent =
            question.correctReaction;

    } else {

        reaction.textContent =
            question.wrongReaction;

    }


    setTimeout(() => {

        currentQuestion++;


        if (currentQuestion < questions.length) {

            showQuestion();

        } else {

            showQuizResult();

        }

    }, 1800);

}


/* =========================================
   FINISH QUIZ
========================================= */

function showQuizResult() {

    changeScreen(
        "quizScreen",
        "resultScreen"
    );

}


/* =========================================
   SHOW LETTER
========================================= */

function showLetter() {

    changeScreen(
        "resultScreen",
        "letterScreen"
    );

}


/* =========================================
   GOOD NIGHT
========================================= */

function startGoodNight() {

    changeScreen(
        "letterScreen",
        "goodNightScreen"
    );


    setTimeout(() => {

        createStars();

    }, 700);


    setTimeout(() => {

        showGoodNightText();

    }, 3500);

}


/* =========================================
   STAR CANVAS
========================================= */

function createStars() {

    const canvas =
        document.getElementById("starCanvas");

    const ctx =
        canvas.getContext("2d");


    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;


    const stars = [];

    const numberOfStars = 250;


    for (let i = 0; i < numberOfStars; i++) {

        stars.push({

            x: Math.random() * canvas.width,

            y: Math.random() * canvas.height,

            size: Math.random() * 2 + 0.3,

            opacity: Math.random(),

            speed: Math.random() * 0.02 + 0.005

        });

    }


    function animateStars() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        stars.forEach(star => {

            star.opacity += star.speed;


            if (star.opacity >= 1 ||
                star.opacity <= 0.1) {

                star.speed *= -1;

            }


            ctx.beginPath();


            ctx.arc(
                star.x,
                star.y,
                star.size,
                0,
                Math.PI * 2
            );


            ctx.fillStyle =
                `rgba(255,255,255,${star.opacity})`;


            ctx.shadowBlur = 8;

            ctx.shadowColor = "white";


            ctx.fill();

        });


        requestAnimationFrame(
            animateStars
        );

    }


    animateStars();


    window.addEventListener(
        "resize",
        function () {

            canvas.width =
                window.innerWidth;

            canvas.height =
                window.innerHeight;

        }
    );

}


/* =========================================
   GOOD NIGHT TEXT
========================================= */

function showGoodNightText() {

    const text =
        document.getElementById("goodNightText");

    const letters =
        text.querySelectorAll("span");


    text.classList.add("visible");


    letters.forEach((letter, index) => {

        if (letter.classList.contains("space")) {
            return;
        }


        setTimeout(() => {

            letter.classList.add("show");

        }, index * 350);

    });

}