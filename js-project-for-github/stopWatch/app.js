let timerEl = document.getElementById('timer');
let startButtonEl = document.getElementById('start');
let stopButtonEl = document.getElementById('stop');
let resetButtonEl = document.getElementById('reset');

let milliseconds = 0; 
let seconds = 0;
let minutes = 0;
let hours = 0;

let startTime = 0;
let elapsedTime = 0; 
let timeInterval;

stopButtonEl.disabled = true;
resetButtonEl.disabled = true;

function startTimer(){
       startTime = Date.now() - elapsedTime;
       timeInterval = setInterval(()=>{
              elapsedTime = Date.now() - startTime;
              timerEl.textContent = formatTimer(elapsedTime);
       }, 10);
       startButtonEl.disabled = true;
       stopButtonEl.disabled = false;
       resetButtonEl.disabled = false;

}

function formatTimer(elapsedTime) {
       milliseconds = Math.floor((elapsedTime % 1000) / 10);
       seconds = Math.floor((elapsedTime / 1000) % 60);
       minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
       hours = Math.floor(elapsedTime / (1000 * 60 * 60));
   
       milliseconds = milliseconds.toString().padStart(2, "0");
       seconds = seconds.toString().padStart(2, "0");
       minutes = minutes.toString().padStart(2, "0");
       hours = hours.toString().padStart(2, "0");
   
       return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
   }
   function stopTimer(){
       clearInterval(timeInterval);
       startButtonEl.disabled = false;
       stopButtonEl.disabled = true;
   }
   function resetTimer(){
       clearInterval(timeInterval);
       milliseconds = 0;
       seconds = 0;
       minutes = 0;
       hours = 0;
       startTime = 0;
       elapsedTime = 0;
       milliseconds = milliseconds.toString().padStart(2, "0");
       seconds = seconds.toString().padStart(2, "0");
       minutes = minutes.toString().padStart(2, "0");
       hours = hours.toString().padStart(2, "0");

       timerEl.textContent = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
       startButtonEl.disabled = false;
       stopButtonEl.disabled = true;
       resetButtonEl.disabled = true;


   }
startButtonEl.addEventListener('click', startTimer);
stopButtonEl.addEventListener('click', stopTimer);
resetButtonEl.addEventListener('click', resetTimer);