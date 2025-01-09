window.onload=()=>{
       setGame();
}
let currMoleTile;
let currPlantTile;
let gameOver = false;
let scoreEl = document.getElementById('score');
let score = 0;
let boardEl = document.getElementById('board');


function setGame(){

       for(let i= 0; i<9; i++){
              let tile = document.createElement('div');
              tile.id= i.toString();
              boardEl.appendChild(tile);
              tile.addEventListener('click', secoreCount);
       }
       setInterval(setMoleTile, 1000);
       setInterval(setPlantTile, 2000);
}

function randomId(){
       let num = Math.floor(Math.random()*9)
       return num;
}

function setMoleTile(){
       if(gameOver){
              return;
       }
       
       if(currMoleTile){
              currMoleTile.innerText = '';
       }
       let num = randomId();
       if(currPlantTile && currPlantTile.id == num){
              return;
       }
       
        currMoleTile = document.getElementById(num);
       let molTilImg = document.createElement('img');
       molTilImg.src= './img/monty-mole.png';
       currMoleTile.appendChild(molTilImg);
}

function setPlantTile(){
       if(gameOver){
              return;
       }
       if(currPlantTile){
              currPlantTile.innerText= '';
       }
       let num = randomId();
       if(currMoleTile && currMoleTile.id== num){
              return;
       }
       
       currPlantTile = document.getElementById(num);
       plantTileImg = document.createElement('img');
       plantTileImg.src= './img/piranha-plant.png';
       currPlantTile.appendChild(plantTileImg);
}

function secoreCount(){
       // console.log(currMoleTile);
       if(this == currMoleTile){
              score += 10;
              scoreEl.innerText = score.toString();

       } else if(this == currPlantTile){
              gameOver = true;
              scoreEl.innerText = 'Game is over: ' + score;
       }
}