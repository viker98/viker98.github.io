const sounds = [
    { name: "Pac-Man Death", file: "src/Sounds/pacmandies.mp3"},
    { name: "Mario Coin", file: "src/Sounds/Mariocoin.mp3"},
    { name: "Zelda Rupee", file: "src/Sounds/Zeldarupee.mp3"},
    { name: "TonyHawk Speical Trick", file: "src/Sounds/TonyHawkspecial.mp3"}
];

let currentSound = null;

const playBtn = document.getElementById("playBtn");
const choicesDiv = document.getElementById("choices");
const result = document.getElementById("result");

// Create answer buttons
sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.textContent = sound.name;
    btn.classList.add("choiceBtn");

    btn.addEventListener("click", () => checkAnswer(sound.name));

    choicesDiv.appendChild(btn);
});

playBtn.addEventListener("click", playRandomSound);

function playRandomSound() {
    result.textContent = "";
    const random = sounds[Math.floor(Math.random() * sounds.length)];
    currentSound = random.name;

    const audio = new Audio(random.file);
    audio.play();
}

function checkAnswer(selected) {
    if (!currentSound) {
        result.textContent = "Click 'Play Sound' first!";
        return;
    }

    if (selected === currentSound) {
        result.textContent = "Correct! 🎉";
        result.style.color = "green";
    } else {
        result.textContent = `Wrong! The correct sound was: ${currentSound}`;
        result.style.color = "red";
    }
}
