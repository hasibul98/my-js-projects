let cellEl = document.querySelectorAll('.cell');
let statusEl = document.getElementById('status-text');
let restartEl = document.getElementById('restart');

let currentPlayer = 'X';
let options = ['','','','','','','','',''];
const winConditions = [
       [0, 1, 2],
       [3, 4, 5],
       [6, 7, 8],
       [0, 3, 6],
       [1, 4, 7],
       [2, 5, 8],
       [0, 4, 8],
       [2, 4, 6]
       
];

let running = false;
let gameRestart = false;

playGame();

function playGame(){
       cellEl.forEach((cell)=>{
              cell.addEventListener('click',cellClicked);
       })
       restartEl.addEventListener('click', resetGame);
       

       running = true;
       
}

function cellClicked(){
       const cellIndex = this.getAttribute('cellIndex');
       if(options[cellIndex] != '' || running == false){
              return;
       }
       updateCell(this, cellIndex);
       
       windecide();
       if (running) { 
              changePlayer();
          }
          
       

       
}
function updateCell(cell, index){
       options[index] = currentPlayer;
       cell.textContent = currentPlayer;
       
       
}

function changePlayer(){
       currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
       statusEl.textContent = `${currentPlayer}'s turn`;

}

function windecide(){
       let rounWon = false;
       for(let i = 0; i< winConditions.length; i++){
              let conditions = winConditions[i];
              let cellA = options[conditions[0]]
              let cellB = options[conditions[1]]
              let cellC = options[conditions[2]]
              if(cellA == '' || cellB == '' || cellC == ''){
                     continue;
              }
              if(cellA == cellB && cellB == cellC){
                    
                     rounWon = true;
                     gameRestart = true;
                     break;
              }
              
              
       }
       if(rounWon){
              statusEl.textContent = `${currentPlayer} 's won`;
              running = false;
             
       } else if(!options.includes('')){
              statusEl.textContent = 'this match Draw';
              gameRestart = true;
              running = false;
              
       }
}

function resetGame(){
       if(gameRestart == true){
              currentPlayer = 'X';
        options = ['','','','','','','','',''];
       statusEl.textContent = `${currentPlayer}'s turn`;
       cellEl.forEach((cell)=> cell.textContent = '');
       running = true;
       gameRestart = false;

       }
       

}
       