const board = document.getElementById('game-board');
const message = document.getElementById('message');
const timerDisplay = document.getElementById('time');
const ScoreDisplay = document.getElementById("ScoreNumber");

let timeLimit = 3; // seconds to click
let timer;
let dot;
let currentScore = 0;

function startGame() {
  message.textContent = "";
  timerDisplay.textContent = timeLimit;
  spawnDot();
  startTimer();
}

function spawnDot() {
  if (dot) dot.remove();

  dot = document.createElement('div');
  dot.classList.add('dot');

  // Random position within board
  const maxX = board.clientWidth - 50;
  const maxY = board.clientHeight - 50;
  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);

  dot.style.left = x + 'px';
  dot.style.top = y + 'px';

  board.appendChild(dot);

  dot.addEventListener('click', () =>
  {
    clearInterval(timer);
    timeLimit = Math.max(1, timeLimit - 0.2); // slightly harder each round
    currentScore++;
    ScoreDisplay.textContent = currentScore;
    startGame();
  });
}

function startTimer() {
  let remaining = timeLimit;
  timerDisplay.textContent = remaining.toFixed(1);

  timer = setInterval(() => {
    remaining -= 0.1;
    timerDisplay.textContent = remaining.toFixed(1);

    if (remaining <= 0) {
      clearInterval(timer);
      gameOver();
    }
  }, 100);
}

function gameOver() {
  if (dot) dot.remove();
  message.textContent = "Game Over! Refresh to play again.";
}

startGame();
