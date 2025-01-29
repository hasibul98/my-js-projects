let blockSize = 25;
let rows = 20;
let cols = 20;
let board;
let context;


let snakeX = 5 * blockSize;
let snakeY = 5 * blockSize; 
let foodX;
let foodY;

let velocityX =0;
let velocityY =0;

let snakeBody = [];

let gameOver = false;
let pause = false;
let messageEl = document.getElementById('message');
let score =0;
let scoreEl = document.getElementById('score');

window.onload= ()=>{
       board = document.getElementById('board');
       board.height = rows * blockSize;
       board.width = cols * blockSize;
       context = board.getContext('2d');

       setInterval(update, 1000/10);
       // update();
       snakeFood();
       document.addEventListener('keyup', moveSnake);
       if(gameOver== false){
              messageEl.innerText = 'press Left Arrow, Right Arrow, Up Arrow, Down Arrow';
       }
       
       
      
       

}
function update(){
       if(pause || gameOver){
              return;
       }
       
       context.fillStyle = 'black';
       context.fillRect(0,0, board.width, board.height);

       // snake food
       context.fillStyle= 'red';
       context.fillRect(foodX, foodY, blockSize, blockSize);
       if(foodX == snakeX && foodY == snakeY){
              snakeBody.push([foodX, foodY]);

              snakeFood();
              score++;
              scoreEl.innerText = score;
       }
       

       for(let i = snakeBody.length -1; i> 0; i--){
              snakeBody[i] = snakeBody[i-1];
              // console.log(snakeBody[i]);
       }
       if(snakeBody.length){
              snakeBody[0] = [snakeX, snakeY];
       }

        
      


       // snake head
       snakeX += velocityX * blockSize;
       snakeY += velocityY * blockSize;
       context.fillStyle = 'lime';
       context.fillRect(snakeX, snakeY, blockSize, blockSize);
       
       for(let i =0; i< snakeBody.length; i++){
              context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
       }

       
       

       if(snakeX < 0 || snakeX >= cols * blockSize || snakeY < 0 || snakeY >= rows * blockSize){
              gameOver = true;
              if(gameOver== true){
                     messageEl.innerText = 'press Space key for reStart Game';
              } 
              
              
              
       }
       for (let i = 0; i < snakeBody.length; i++) {
              if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
                  gameOver = true;
                  messageEl.innerText = 'press Space key for reStart Game';
                  
                  
              }
          }

}


function snakeFood(){
       foodX = Math.floor(Math.random()*rows) * blockSize;
       foodY = Math.floor(Math.random()* cols) * blockSize;
}

function moveSnake(e){
       if(e.code == 'ArrowUp' && velocityY != 1){
              velocityX =0;
              velocityY = -1;
       } else if(e.code == 'ArrowDown' && velocityY != -1){
              velocityX = 0;
              velocityY = 1;
       } else if(e.code == 'ArrowLeft' && velocityX != 1){
              velocityX = -1;
              velocityY = 0;
       } else if(e.code == 'ArrowRight' && velocityX != -1){
              velocityX = 1;
              velocityY = 0;
       }
       if(velocityX > 0 || velocityY > 0 || velocityX < 0 || velocityY < 0){
              messageEl.innerText = 'press space for puse this game';
              
              
       }
       

       if(e.code == 'Space'){
              if(gameOver){
                     resetGame();
              } else{
                     pause = !pause;
                     if(pause == true){
                            messageEl.innerText = 'press Space for resume this Game';
                     }
              }
       }

}
function resetGame(){
        snakeX = 5 * blockSize;
        snakeY = 5 * blockSize; 
        snakeBody = [];
        velocityX =0;
        velocityY =0;
        gameOver = false;
        pause = false;
        snakeFood();
        if(gameOver == false){
              messageEl.innerText = 'press Left Arrow, Right Arrow, Up Arrow, Down Arrow';
        }
        score =0;
        scoreEl.innerText = 0;

}
