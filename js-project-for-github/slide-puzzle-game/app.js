let boardEl = document.getElementById('board');
let dragStartImg;
let dragDropImg;
let score = 0;

let imgGroup = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];

window.onload = () => {
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            let imgEl = document.createElement('img');
            imgEl.id = r.toString() + '-' + c.toString();
            imgEl.src = imgGroup.shift() + ".jpg";
            boardEl.append(imgEl);

            // Desktop events
            imgEl.addEventListener('dragstart', dragStart);
            imgEl.addEventListener('dragover', dragOver);
            imgEl.addEventListener('dragenter', dragEnter);
            imgEl.addEventListener('dragleave', dragLeave);
            imgEl.addEventListener('drop', dragDrop);
            imgEl.addEventListener('dragend', dragEnd);
            
            imgEl.addEventListener('touchstart', touchStart);
            imgEl.addEventListener('touchmove', touchMove);
            imgEl.addEventListener('touchend', touchEnd);
        }
    }
};

function dragStart() {
    dragStartImg = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {}

function dragDrop() {
    dragDropImg = this;
}

function dragEnd() {
    swapImages();
}

function touchStart(e) {
    dragStartImg = e.target;
}

function touchMove(e) {
    e.preventDefault(); 
}

function touchEnd(e) {
    let touch = e.changedTouches[0];
    let dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);

    if (dropTarget && dropTarget.tagName === 'IMG') {
        dragDropImg = dropTarget;
        swapImages();
    }
}

function swapImages() {
    if (!dragDropImg.src.includes('3.jpg')) {
        return;
    }

    let currCoords = dragStartImg.id.split('-');
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = dragDropImg.id.split('-');
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = r === r2 && c2 === c - 1;
    let moveRight = r === r2 && c2 === c + 1;
    let moveUp = c === c2 && r2 === r - 1;
    let moveDown = c === c2 && r2 === r + 1;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if (isAdjacent) {
        let currImg = dragDropImg.src;
        let otherImg = dragStartImg.src;

        dragStartImg.src = currImg;
        dragDropImg.src = otherImg;

        score++;
        document.getElementById('score').innerText = score;
    }
}
