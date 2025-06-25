const menuEl = document.querySelector('.menu');
const menuText = document.querySelector('.menu p')
const socialListEl = document.querySelector('.social-lists');
const socialInnerEl = document.querySelectorAll('.social-lists li')

menuEl.addEventListener('click',()=>{
       socialListEl.classList.toggle('hide');
       menuEl.classList.toggle('rotate');
})

socialInnerEl.forEach((socialInner)=>{
       socialInner.addEventListener('click', ()=>{
              console.log(socialInner);
              menuText.innerHTML = socialInner.innerHTML;
              socialListEl.classList.add('hide');
              menuEl.classList.toggle('rotate');
       })
       
})