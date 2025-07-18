const nums = document.querySelectorAll( '.nums span' );
const counter = document.querySelector( '.counter' );
const finalMessage = document.querySelector( '.final' );
const replay = document.querySelector( '#replay' );

runAnimation();

function runAnimation() {
       nums.forEach( ( num, idx ) =>
       {
              // console.log( num, idx );
              const nextToLast = nums.length - 1;
              num.addEventListener( 'animationend', ( e ) =>
              {
                     if ( e.animationName === 'goIn' && idx !== nextToLast )
                     {
                            num.classList.remove( 'in' );
                            num.classList.add( 'out' );
                     } else if ( e.animationName === 'goOut' && num.nextElementSibling )
                     {
                            num.nextElementSibling.classList.add( 'in' );

                     } else
                     {
                            counter.classList.add( 'hide' );
                            finalMessage.classList.add( 'show' );
                     }
              })
       })
}

function resetDOM() {
       counter.classList.remove( 'hide' );
       finalMessage.classList.remove( 'show' );
       nums.forEach( ( num ) =>
       {
              num.classList.value = '';
              // console.log( num.classList );
       } )
       nums[ 0 ].classList.add( 'in' );
}

replay.addEventListener( 'click', () =>
{
       resetDOM();
       runAnimation();
})