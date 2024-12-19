const timerEl = document.getElementById('timer');
const startEl = document.getElementById('start');
const stopEl = document.getElementById('stop');
const resetEl = document.getElementById('reset');

let intervel;
let timeLeft = 1500;
let modifyTime = timeLeft;

function timeUpdate(){
       let minutes = Math.floor(modifyTime/60);
       let extraSecond = modifyTime % 60;

       let formatedTime = `${minutes.toString().padStart(2, '0')} : ${extraSecond.toString().padStart(2, '0')}`;
       timerEl.innerHTML = formatedTime;
}

function startTimer(){
     intervel =  setInterval(() => {
              modifyTime--;
              timeUpdate();
              if(modifyTime === 0){
                 clearInterval(intervel);
                 modifyTime = timeLeft;
                 timeUpdate();    
              }
       }, 1000);
}
function stopTimer(){
       clearInterval(intervel);
}
function resetTimer(){
       clearInterval(intervel);
       modifyTime = timeLeft;
       timeUpdate();
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener('click', stopTimer);
resetEl.addEventListener('click', resetTimer);