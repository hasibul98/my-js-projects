const imageContainer = document.querySelector('.image-container');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close-btn');

let imageCount = 0;
const loadingIndicator = document.createElement('div');
loadingIndicator.className = 'loading';
loadingIndicator.innerHTML = '<div class = "spinner"> </div>Loading....';
imageContainer.appendChild(loadingIndicator);

function loadImages(){
       loadingIndicator.style.display = 'flex';
       setTimeout(()=>{
              for(let i = 0; i< 10; i++){
                     const imgWrapper = document.createElement('div');
                     imgWrapper.className = 'image-wrapper';
                     const img = document.createElement('img');
                     img.src = `https://picsum.photos/200/300?random=${imageCount++}`;
                     img.loading = 'lazy';
                     img.className = 'fade-in';
                     img.addEventListener('click', (e)=>{
                            modal.style.display = 'block';
                            // modalImg.src = img.src;
                            modalImg.src = e.target.src;
                     })                     
                     imgWrapper.appendChild(img);
                    
                     imageContainer.appendChild(imgWrapper);
              }
              loadingIndicator.style.display= 'none';
              observeLastImage();
       }, 1000);
}

closeBtn.addEventListener('click', ()=>{
       modal.style.display = 'none';
})

const observer = new IntersectionObserver((entries, observer)=>{
       if(entries[0].isIntersecting){
            observer.unobserve(entries[0].target);
            loadImages();  
       }
},{threshold: 1.0});

function observeLastImage(){
       const images = document.querySelectorAll('.image-container .image-wrapper img');
       if(images.length > 0){
              observer.observe(images[images.length-1]);
       }
}


loadImages();