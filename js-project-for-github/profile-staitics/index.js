
const countersEl = document.querySelectorAll( ".counter" );

countersEl.forEach( ( counterEl ) =>
{
       counterEl.innerText = '0';
       incrementCounter();


       function incrementCounter ()
       {
              let currentNum = +counterEl.innerText;
              const dataCeil = counterEl.getAttribute( "data-ceil" );
              const increment = Math.floor( dataCeil / 15 );

              currentNum = currentNum + increment;
              if ( currentNum < dataCeil )
              {
                     counterEl.innerText = currentNum;
                     setTimeout( incrementCounter, 50 );
              } else
              {
                     counterEl.innerText = dataCeil;
              }
       }
} );