const btnEl = document.querySelector('.btn');
const trailerContainer = document.querySelector('.trailer-container');
const closeIcon = document.querySelector('.close-icon');

const videoEl = document.querySelector('video');

btnEl.addEventListener('click',()=>{
       trailerContainer.classList.remove('active')
})

closeIcon.addEventListener('click', ()=>{
       trailerContainer.classList.add('active')
       videoEl.pause();
       videoEl.currentTime = 0;
})
