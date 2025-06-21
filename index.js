const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");

const addScore = (score, team) => {
  if (team === "home") {
    homeScore.textContent = parseInt(homeScore.textContent) + score;
  } else if (team === "guest") {
    guestScore.textContent = parseInt(guestScore.textContent) + score;
  }
  const home = Number(homeScore.textContent);
  const guest = Number(guestScore.textContent);

  if (home > guest) {
    homeScore.classList.add("highlight");
    guestScore.classList.remove("highlight");
  } else if (home < guest) {
    guestScore.classList.add("highlight");
    homeScore.classList.remove("highlight");
  } else {
    homeScore.classList.remove("highlight");
    guestScore.classList.remove("highlight");
  }
};

const resetScore = () => {
  homeScore.textContent = 0;
  guestScore.textContent = 0;
  homeScore.classList.remove("highlight");
  guestScore.classList.remove("highlight");
};

let countdownSeconds = 720;
let timeLeft = countdownSeconds;
let countdownInterval = null;
const timerDisplay = document.getElementById("timer");

const formatTime = (seconds) => {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${mins}:${secs}`;
};

timerDisplay.textContent = formatTime(countdownSeconds);

const updateCountdownDisplay = () => {
  timerDisplay.textContent = formatTime(timeLeft);
};

const startCountdown = () => {
  if (countdownInterval || timeLeft <= 0) return;

  countdownInterval = setInterval(() => {
    timeLeft--;
    updateCountdownDisplay();

    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      countdownInterval = null;
      console.log("Time's up!");
    }
  }, 1000);
};

const stopCountdown = () => {
  clearInterval(countdownInterval);
  countdownInterval = null;
};

const resetCountdown = () => {
  stopCountdown();
  timeLeft = countdownSeconds;
  updateCountdownDisplay();
  resetScore();
};
