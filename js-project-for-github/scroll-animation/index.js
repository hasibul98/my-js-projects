const boxes = document.querySelectorAll( '.box' );

window.addEventListener( 'scroll', checkBoxes );
checkBoxes();




function checkBoxes ()
{
       // console.log( window.innerHeight );
       // console.log( window.innerHeight / 5 * 4 );
       const triggerBottom = window.innerHeight / 5 * 4;


       boxes.forEach( box =>
       {
              const boxTop = box.getBoundingClientRect().top;



              if ( boxTop < triggerBottom )
              {
                     setTimeout( () =>
                     {
                            box.classList.add( 'show' );
                     }, 500 );

              } else
              {

                     box.classList.remove( 'show' );

                     // setTimeout( () =>
                     // {
                     //        box.classList.remove( 'show' );
                     // }, 500 );

              }


       } );



}