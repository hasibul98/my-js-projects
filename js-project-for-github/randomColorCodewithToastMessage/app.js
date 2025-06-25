window.onload=()=>{
       main()
}
let div = null;
let changebtn = document.getElementById('change-btn');
let root = document.getElementById('root');
let inputCode = document.getElementById('input-code');
let copybtn = document.getElementById('copy-btn');

function main(){
       changebtn.addEventListener('click',function(){
              root.style.backgroundColor =  hexColorCode();
              inputCode.value= hexColorCode();
              if(div){
                     div.remove();
              }
       });
       copybtn.addEventListener('click',function(){
              navigator.clipboard.writeText(inputCode.value);
              toastmessage(inputCode.value);
       })

}

function hexColorCode(){
       const red = Math.floor(Math.random()*255);
       const green = Math.floor(Math.random()*255);
       const blue = Math.floor(Math.random()*255);

       const hexRed = red.toString(16).padStart(2, 0);
       const hexgreen = green.toString(16).padStart(2, 0);
       const hexblue = blue.toString(16).padStart(2, 0);

       return `#${hexRed}${hexgreen}${hexblue}`;
}

function toastmessage(msg){
       if(div){
           div.remove();   
       }
       div = document.createElement('div');
       div.className= 'toast-message'
       div.innerHTML= `<b>${msg}</b> <br> <h2>this color code is copy</h2>`;
       root.appendChild(div);
       div.addEventListener('click',function(){
              if(div){
                     div.remove();
              }
       })

       setTimeout(() => {
              if(div){
                     div.remove();
              }
              
                     
             
       }, 3000);

}
