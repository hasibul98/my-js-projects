const container = document.getElementById('colorContainer');


function generateRGBColors(){
       const colors = [];
       for(let r =0; r < 256; r+= 30){
              for(let g= 0; g < 256; g += 30){
                     for(let b = 0; b < 256; b += 30){
                            colors.push(`rgb(${r}, ${g}, ${b})`);
                     }
              }
       }
       return colors;
}
const colors = generateRGBColors();
let displayedStart = 0;
const colorsPerPage = 40;

function copyToClipboard(text){
       navigator.clipboard.writeText(text).then(()=>{
              showToast(text);
       }).catch(err=>{
              console.error('Failed to copy', err);
       })
}

function showToast(message){
       const toast = document.getElementById('toast');
       toast.textContent = `Copied: ${message}`;
       toast.classList.add('show');
       setTimeout(()=>{
              toast.classList.remove('show');
       }, 2000)
}

const loadingIndicator = document.createElement('div');
loadingIndicator.className = 'loading';
loadingIndicator.innerHTML = '<div class = "spinner"> </div>Loading....';
container.appendChild(loadingIndicator);

function addColors(){
       loadingIndicator.style.display = 'flex';
       const nextColors = colors.slice(displayedStart, displayedStart + colorsPerPage);
       nextColors.forEach(color =>{
              
              const div = document.createElement('div');
              div.className = 'color-box';
              div.style.backgroundColor = color;
              div.innerHTML =  `<span>${color} </span>`;
              div.addEventListener('click',()=>copyToClipboard(color));
              container.append(div);
       });
       setTimeout(()=>{
       
       
       observeColor();
       loadingIndicator.style.display= 'none';
       
       }, 3000);
       displayedStart += colorsPerPage;
       
       
}

const observer = new IntersectionObserver((entries, observer)=>{
       if(entries[0].isIntersecting){
            observer.unobserve(entries[0].target);
            addColors();  
       }
},{threshold: 1.0});


function observeColor(){
       
              const colorBox = document.querySelectorAll('.color-box');
       if(colorBox.length > 0){
              observer.observe(colorBox[colorBox.length-1]);
       }
       
}






addColors();