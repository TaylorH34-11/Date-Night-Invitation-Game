/* =========================
   ELEMENTS + STATE
========================= */

const noBtn = document.getElementById("noBtn");
const app = document.getElementById("app");

let escaped = false;
let currentQuestion = 0;
let answers = [];

/* =========================
   QUESTIONS FLOW
========================= */

const questions = [
    {
        type: "restaurant",
        question: "Where would you want dinner? 🍽️",
        options: [
            { name: "Von's", img: "vons.jpg" },
            { name: "Cactus Club", img: "cactus.jpg" },
            { name: "Moxies", img: "moxies.jpg" }
        ]
    },
    {
        type: "normal",
        question: "Pick a vibe:",
        options: ["Movie 🎬", "Walk 🌅", "Mini Golf ⛳"]
    },
    {
        type: "normal",
        question: "Choose a dessert:",
        options: ["Ice Cream 🍨", "Cake 🍰", "Cookies 🍪"]
    }
];

/* =========================
   "NO" BUTTON ESCAPE LOGIC
========================= */

function moveButton() {
    if (!escaped) {
        noBtn.style.position = "fixed";
        escaped = true;
    }

    const padding = 20;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

/* triggers */
noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveButton();
});
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveButton();
});

/* =========================
   START FLOW
========================= */

function startQuestions() {
    showQuestion();
}

/* =========================
   QUESTION RENDERING
========================= */

function showQuestion() {
    if (currentQuestion >= questions.length) {
        showFinalPage();
        return;
    }

    const q = questions[currentQuestion];

    app.innerHTML = `
        <h1>${q.question}</h1>

        <div class="options-grid">
            ${q.options.map(option => {

                if (q.type === "restaurant") {
                    return `
                        <div class="card-option"
                             onclick="selectAnswer('${option.name}')">
                            <img src="${option.img}" />
                            <p>${option.name}</p>
                        </div>
                    `;
                }

                return `
                    <button class="choice-btn"
                        onclick="selectAnswer('${option}')">
                        ${option}
                    </button>
                `;
            }).join("")}
        </div>
    `;
}

/* =========================
   ANSWER HANDLING
========================= */

function selectAnswer(answer) {
    answers.push(answer);
    currentQuestion++;
    showQuestion();
}

/* =========================
   FINAL SCREEN
========================= */

function showFinalPage() {
    app.innerHTML = `
        <h1>🎉 It's a Date! 🎉</h1>

        <p><strong>Restaurant:</strong> ${answers[0]}</p>
        <p><strong>Vibe:</strong> ${answers[1]}</p>
        <p><strong>Dessert:</strong> ${answers[2]}</p>

        <h2>Friday at 7:00 PM? ❤️</h2>
    `;
}