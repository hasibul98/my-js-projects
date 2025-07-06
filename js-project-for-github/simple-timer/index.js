const resetBtn = document.querySelector("#reset");
const playBtn = document.querySelector("#play");
const timerEl = document.querySelector("#timer");
const root = document.querySelector(":root");

const totalSeconds = 60;
let playing = false;
let currentSeconds = totalSeconds;
timerEl.innerHTML = formatTime(totalSeconds);
const timerInterval = setInterval(run, 1000);

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const newSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")} : ${newSeconds
    .toString()
    .padStart(2, "0")}`;
}

playBtn.addEventListener("click", () => {
  playing = !playing;
  playBtn.classList.toggle("play");
  playBtn.classList.toggle("bg-green-500");
  const playIcon = playBtn.querySelector("i");
  playIcon.classList.toggle("fa-play");
  playIcon.classList.toggle("fa-pause");
});

function run() {
  if (playing) {
    currentSeconds -= 1;
    if (currentSeconds <= 0) {
      clearInterval(timerInterval);
    }
    timerEl.innerText = formatTime(currentSeconds);
    root.style.setProperty("--degrees", calcDeg());
  }
}

function calcDeg() {
  return `${360 - (currentSeconds / totalSeconds) * 360}deg`;
}

resetBtn.addEventListener("click", resetAll);

function resetAll() {
  playing = false;
  playBtn.classList.remove("play");
  playBtn.classList.remove("bg-green-500");
  const playIcon = playBtn.querySelector("i");
  playIcon.classList.remove("fa-pause");
  playIcon.classList.add("fa-play");
  currentSeconds = totalSeconds;
  timerEl.innerText = formatTime(totalSeconds);
  root.style.setProperty("--degrees", "0deg");
}
