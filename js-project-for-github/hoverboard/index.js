const container = document.getElementById('container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const squaresEl = 500;

const fragment = document.createDocumentFragment();
for(let i = 0; i < squaresEl; i++){
  const square = document.createElement('div');
  square.classList.add('square');
  // container.appendChild(square);
  square.addEventListener('mouseover', ()=> setColor(square));
  square.addEventListener('mouseout', ()=> removeColor(square));
  fragment.appendChild(square);
}
container.appendChild(fragment);


function setColor(element) {
  // console.log(element);
  const color = getRandomColor();
  // console.log(color);
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(element) {
  element.style.background = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
}
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}