const prevBtnEl = document.getElementById('prev');
const nextBtnEl = document.getElementById('next');
const stepsEl = document.querySelectorAll('.step');
const progressEl = document.querySelector('.progress-bar-front');

let currentStep = 1;

nextBtnEl.addEventListener('click',()=>{
       currentStep++;
       // console.log(stepsEl.length);
       // console.log(stepsEl);
       if(currentStep > stepsEl.length){
              currentStep = stepsEl.length;
              
              
       }
       
       updateStepProgress();
})

prevBtnEl.addEventListener('click', ()=>{
       currentStep--;
       if(currentStep < 1 ){
              currentStep = 1;
              
       }
       updateStepProgress();
})

function updateStepProgress(){

       stepsEl.forEach((stepEl, idx)=>{
              if(idx < currentStep){
                     stepEl.classList.add('checked');
                     stepEl.innerHTML = `
                     <i class="fas fa-check"></i>
                     <small>${idx==0 ? 'start' : idx== stepsEl.length - 1 ? 'Final' : 'step' + idx   }</small>
                     `
              } else{
                     stepEl.classList.remove('checked');
                     stepEl.innerHTML = `<i class="fas fa-times"></i>`;
              }


       });
       

       const checkedNumber = document.querySelectorAll('.checked');
       progressEl.style.width = ((checkedNumber.length - 1) / (stepsEl.length - 1)) * 100 + "%";

       if(currentStep === 1){
              prevBtnEl.disabled = true;
       } else if( currentStep === stepsEl.length){
              nextBtnEl.disabled = true;
       } else{
              nextBtnEl.disabled = false;
              prevBtnEl.disabled = false;
       }
       

}