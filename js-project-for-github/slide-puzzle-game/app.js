let boardEl = document.getElementById('board');
let dragStartImg;
let dragDropImg;
let score = 0;

let imgGroup = ["4", '2', '8', '5', '1', '6', '7', '9', '3'];

window.onload= ()=>{
       
       for(let r = 0; r < 3; r++){
              for(let c = 0; c< 3; c++){
                     let imgEl = document.createElement('img');
                     imgEl.id = r.toString() + '-' + c.toString();
                     imgEl.src = imgGroup.shift() + ".jpg";
                     boardEl.append(imgEl);

                     imgEl.addEventListener('dragstart', dragStart);
                     imgEl.addEventListener('dragover', dragOver);
                     imgEl.addEventListener('dragenter', dragEnter);
                     imgEl.addEventListener('dragleave', dragLeave);
                     imgEl.addEventListener('drop', dragDrop);
                     imgEl.addEventListener('dragend', dragEnd);
              }
       }

}

function dragStart(){
        dragStartImg = this;
        console.log(dragStartImg);
}
function dragOver(e){
       e.preventDefault();
}
function dragEnter(e){
       e.preventDefault();
}
function dragLeave(){

}

function dragDrop(){
       dragDropImg = this; 
}

function dragEnd(){
       if(!dragDropImg.src.includes('3.jpg')){
              return;
       }

       let currCoods = dragStartImg.id.split('-');
      let r = parseInt(currCoods[0]);
      let c = parseInt(currCoods[1]);
//       console.log(r);
//       console.log(c);

      let otherCoods = dragDropImg.id.split('-');
      
      let r2 = parseInt(otherCoods[0]);
      let c2 = parseInt(otherCoods[1]);
      console.log(r2);
      console.log(c2);

      let moveLeft = r == r2 && c2 == c -1;
      let moveRight = r == r2 && c2 == c + 1;
      let moveUp =  c == c2 && r2 == r - 1;
      let moveDown = c == c2 && r2 == r + 1;


      isAdjacent = moveLeft || moveRight || moveUp || moveDown;

      if(isAdjacent){
       let currImg = dragDropImg.src;
       let otherImg = dragStartImg.src;
       // console.log(currImg);

       dragStartImg.src = currImg;
       dragDropImg.src= otherImg;
       score++
       document.getElementById('score').innerText = score;

      }
       

       
}
