const buttons = document.querySelectorAll('button');
const userScoreEl = document.getElementById('user-score');
const computerScoreEl = document.getElementById('computer-score');
const resultEl = document.getElementById('result');

let computerScore = 0;
let userScore = 0;


buttons.forEach((button)=>{
       button.addEventListener('click',()=>{
              const result = playRound(button.id, playComputer());
              resultEl.textContent= result;
              console.log(button.id);
       })
})


function playComputer(){
       const choices = ['rock', 'paper', 'scissors'];
       const randomChoices = Math.floor(Math.random()*choices.length);
       return choices[randomChoices];
}


function playRound(userSelection, computerSelection){
       if(userSelection === computerSelection){
              return `you select: ${userSelection} and computer Select: ${computerSelection}, this match is draw`;
       } else if((userSelection === 'rock' && computerSelection=== 'scissors') || (userSelection === 'scissors' && computerSelection === "paper") || (userSelection === 'paper' && computerSelection === 'rock') ){
              userScore++;
              userScoreEl.textContent= userScore;
              return`you select: ${userSelection} and computer Select: ${computerSelection},` ;
       } else{
              computerScore++;
              computerScoreEl.textContent= computerScore;
               return`you select: ${userSelection} and computer Select: ${computerSelection},`;

       }
}