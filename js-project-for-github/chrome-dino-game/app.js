// Selecting buttons
const resetBtn = document.querySelector(".reset-button");
const modal = document.getElementById("modal");
const closeModalBtn = document.querySelector(".close-btn");
const scoreCard = document.getElementById("score-card");

let board;
let boardWidth = 750;
let boardHeight = 250;
let context;
let score = 0;

//dino
let dinoImg;
let dinoWidth = 88;
let dinoHeight = 94;
let dinoX = 50;
let dinoY = boardHeight - dinoHeight;

let dino = {
  x: dinoX,
  y: dinoY,
  width: dinoWidth,
  height: dinoHeight,
};

//cactus setup
let cactusArray = [];

let cactus1Img;
let cactus2Img;
let cactus3Img;

cactus1Width = 34;
cactus2Width = 69;
cactus3Width = 102;

let cactusHeight = 70;
let cactusX = 700;
let cactusY = boardHeight - cactusHeight;

//physics
let gravity = 0.4;
let velocityX = -8;
let velocityY = 0;
let gameOver = false;
console.log(gameOver);

window.onload = () => {
  board = document.getElementById("board");
  board.width = boardWidth;
  board.height = boardHeight;
  context = board.getContext("2d");
  dinoImg = new Image();
  dinoImg.src = "./img/dino.png";

  dinoImg.onload = function () {
    context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
  };

  cactus1Img = new Image();
  cactus1Img.src = "./img/cactus1.png";
  cactus2Img = new Image();
  cactus2Img.src = "./img/cactus2.png";
  cactus3Img = new Image();
  cactus3Img.src = "./img/cactus3.png";

  requestAnimationFrame(update);
  setInterval(placeCactus, 2000);
  document.addEventListener("keydown", moveDino);
};

function update() {
  console.log("Update called, gameOver state: ", gameOver);

  if (gameOver) {
    modal.style.display = "flex";
    return;
  }

  requestAnimationFrame(update);
  context.clearRect(0, 0, boardWidth, boardHeight);

  velocityY += gravity;
  dino.y = Math.min(dino.y + velocityY, dinoY);

  context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);

  for (let i = 0; i < cactusArray.length; i++) {
    let cactus = cactusArray[i];
    cactus.x += velocityX;

    context.drawImage(
      cactus.img,
      cactus.x,
      cactus.y,
      cactus.width,
      cactus.height
    );

    if (detectCollision(dino, cactus)) {
      console.log("Collision detected! Setting gameOver to true.");
      gameOver = true;
      dinoImg.src = "./img/dino-dead.png";
      dinoImg.onload = () => {
        context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
      };
    }
  }

  context.fillStyle = "black";
  context.font = "20px courier";
  score++;
  context.fillText(score, 5, 20);
  scoreCard.innerHTML = "Score: " + score
}

function moveDino(e) {
  if (gameOver == true && e.code == "Space") {
    resetGame();
    return;
  }

  if ((e.code == "Space" || e.code == "ArrowUp") && dino.y == dinoY) {
    velocityY = -10;
  }
}

function placeCactus() {
  if (gameOver) {
    return;
  }
  let cactus = {
    img: null,
    x: cactusX,
    y: cactusY,
    width: null,
    height: cactusHeight,
  };
  let placeChanceCactus = Math.random();

  if (placeChanceCactus > 0.9) {
    cactus.img = cactus3Img;
    cactus.width = cactus3Width;
    cactusArray.push(cactus);
  } else if (placeChanceCactus > 0.7) {
    cactus.img = cactus2Img;
    cactus.width = cactus2Width;
    cactusArray.push(cactus);
  } else if (placeChanceCactus > 0.5) {
    cactus.img = cactus1Img;
    cactus.width = cactus1Width;
    cactusArray.push(cactus);
  } else {
    cactus.img = cactus3Img;
    cactus.width = cactus3Width;
    cactusArray.push(cactus);
  }
  if (cactusArray.length > 10) {
    cactusArray.shift();
  }
}

function detectCollision(a, b) {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}

function resetGame() {
  dino.y = dinoY;
  velocityY = 0;
  cactusArray = [];
  score = 0;
  gameOver = false;
  dinoImg.src = "./img/dino.png";

  requestAnimationFrame(update);
}

function closeModal() {
  modal.style.display = "none";
}

window.addEventListener("click", () => {
       closeModal();
       resetBtn();
});
resetBtn.addEventListener("click", resetGame);
closeModalBtn.addEventListener("click", closeModal);