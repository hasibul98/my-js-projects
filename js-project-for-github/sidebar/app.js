const fabarsEl = document.querySelector('.fa-bars');
const sidebarEl = document.querySelector('.sidebar');
const faTimesEl = document.querySelector('.fa-times');

fabarsEl.addEventListener('click', ()=>{
       sidebarEl.classList.toggle('active');
})

faTimesEl.addEventListener('click', ()=>{
       sidebarEl.classList.remove('active');
})
