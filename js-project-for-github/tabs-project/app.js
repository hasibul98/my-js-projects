const tab = document.querySelector('.tabs-container');
const buttons = document.querySelectorAll('.button');
const contents = document.querySelectorAll('.content');

tab.addEventListener('click',function(e){
       const id = e.target.dataset.id;
       if(id){
              buttons.forEach(function(button){
                     button.classList.remove('active');
              });
              e.target.classList.add('active');
              contents.forEach(function(content){
                     content.classList.remove('live');
              })
              const element = document.getElementById(id);
              element.classList.add('live');
       }
       console.log(event.target);
})

