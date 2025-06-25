let diceEl = document.getElementById('dice');
let rollbtn = document.getElementById('roll-button');
let rollHistoryEl= document.getElementById('roll-history');
let rollHistory = [];

function rollDice(){
       let rollResult = Math.floor(Math.random()*6)+ 1;
       let diceFace = getDice(rollResult);
       diceEl.innerHTML= diceFace;
       rollHistory.push(rollResult);
       updateRollHistory();
}

function updateRollHistory(){
       rollHistoryEl.innerHTML = '';
       for(let i= 0; i< rollHistory.length; i++){
              let liEl = document.createElement('li');
              liEl.innerHTML= `<span>Roll ${i}:</span> ${getDice(rollHistory[i])}`;
              rollHistoryEl.appendChild(liEl);
       }
}


function getDice(rollResult){
       switch(rollResult){
                   case 1:
                     return "&#9856;";
                   case 2:
                     return "&#9857;";
                   case 3:
                     return "&#9858;";
                   case 4:
                     return "&#9859;";
                   case 5:
                     return "&#9860;";
                   case 6:
                     return "&#9861;";
                   default:
                     return "";

       }
}

rollbtn.addEventListener("click", ()=>{
       diceEl.classList.add('roll-animation');
       setTimeout(()=>{
              diceEl.classList.remove('roll-animation');
              rollDice();
       }, 1000)
      
       
});