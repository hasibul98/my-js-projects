let rows = 5;
let columns = 5;
let boardEl = document.getElementById('board');
let piecesEl = document.getElementById('pieces');
let currTile;
let otherTile;

window.onload = ()=>{
       for(let r = 0; r< rows; r++ ){
              for(let c=0; c < columns; c++){
                     let imgurl = './images/blank.jpg';
                     imgCollect(boardEl, imgurl);
              }
       }

       let pieces = [];
for(let i = 1; i <= rows * columns; i++){
       pieces.push(i.toString());
}
pieces = ShuffleArray(pieces);
for(let i = 0; i < pieces.length; i++  ){
       imgurl = './images/'+pieces[i]+'.jpg';
       imgCollect(piecesEl, imgurl);
}

}

function ShuffleArray(array){
       for(let i = array.length-1; i> 0; i--){
              let j = Math.floor(Math.random()*(i+1));
              let tmp = array[i];
              array[i] = array[j];
              array[j] = tmp;
       }
       return array;
}

function imgCollect(place, imgurl){
       let tile = document.createElement('img');
       // tile.src = './images/blank.jpg';
       tile.src = imgurl;
       place.append(tile);
       addDragDropListiner(tile);
       

}

function addDragDropListiner(tile){
       tile.addEventListener('dragstart', dragStart);
       tile.addEventListener('dragover', dragOver);
       tile.addEventListener('dragenter', dragEnter);
       tile.addEventListener('dragleave', dragLeave);
       tile.addEventListener('drop', dragDrop);
       tile.addEventListener('dragend', dragEnd);
       tile.addEventListener('touchstart', touchStart);
       tile.addEventListener('touchmove', touchMove);
       tile.addEventListener('touchend', touchEnd);
}

function dragStart(){
       currTile = this;
}
function dragOver(e){
       e.preventDefault();
}
function dragEnter(e){
       e.preventDefault();
}
function dragLeave(e){
       
}
function dragDrop(){
       otherTile = this;
}
function dragEnd(){
       swapImages();
}

function touchStart(e){
       currTile = e.target;
}
function touchMove(e){
       e.preventDefault();
}
function touchEnd(e){
 let touch = e.changeTouches[0];
 let dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);
if(dropTarget && dropTarget.tagName === 'IMG'){
       otherTile = dropTarget;
       swapImages;
}

}

function swapImages(){
      let currImg = currTile.src;
       let otherImg = otherTile.src;

       currTile.src = otherImg;
       otherTile.src = currImg;
}