const inputEl = document.getElementById('input');
const resultEl = document.getElementById('result');
const errorEl = document.getElementById('error');

let errorTime;


function updateResult(){
       
       if(input.value <= 0 || isNaN(input.value)){
              
              errorEl.innerText = 'please input a valid Number';
              clearTimeout(errorTime);
              errorTime= setTimeout(()=>{
                     errorEl.innerText = '';
                     
              }, 1000)
              input.value= '';
       }else{
              resultEl.innerText =  (+inputEl.value / 2.2).toFixed(2);
              // errorEl.innerText = '';
       }
}

function removeInput(){
       resultEl.innerText = '';
       inputEl.value = '';
       
       
}

inputEl.addEventListener('input', updateResult);
inputEl.addEventListener('focus', removeInput);