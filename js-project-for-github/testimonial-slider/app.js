const testimonial =[
       {
              name: "Patti",
              photoUrl: "./image/pexels-godisable-jacob-226636-718978.jpg",
              text: "Great screen, easy to connect with multiple cords, super portable and expands my workstation anywhere I am, bright and clear display for extending computer."
       },
       {
              name: "PattiTR Townsend",
              photoUrl: "./image/pexels-justin-shaifer-501272-1222271.jpg",
              text: "I would say that the case could use a few tweaks. It took a bit to figure out how to use it as a stand. I worry that I could crack the screen while it’s in my backpack because there is no support on the sides of the screen protector."
       },
       {
              name: "melissa butler",
              photoUrl: "./image/pexels-olly-712513.jpg",
              text: "I bought this to have an extra screen to hook to my lap top. I normally work off of 3 screens at the office. I bought this so I could expand to two. Works perfect. Clear picture, works as it should. Highly recommend."
       },
];
window.onload=()=>{
       updateTestimonial();
}



 const testimonialSliderEl = document.querySelector('.testimonial-slider');
       const imagEl = document.querySelector('.testimonial-img');
       const sliderTextEl = document.querySelector('.slider-text');
       const testimonialUserNameEl = document.querySelector('.testimonial-username');
       let idx = 0;
       let isPushed = false;

function updateTestimonial(){
       if(!isPushed){
              const { name, photoUrl, text } = testimonial[idx];

              imagEl.src = photoUrl;
              sliderTextEl.innerText = text;
              testimonialUserNameEl.innerText = name;
              idx++;
              if ( idx === testimonial.length ){
                     idx = 0;
              }
       }
       
      
       setTimeout(updateTestimonial, 1000);

}

testimonialSliderEl.addEventListener('mouseover', ()=>{isPushed = true;} );
testimonialSliderEl.addEventListener('mouseleave', ()=> {isPushed = false;});