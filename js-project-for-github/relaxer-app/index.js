const container = document.getElementById( 'container' );
const text = document.getElementById( 'text' );

const totalTime = 6500;
const breathTime = ( totalTime / 5 ) * 2;
const holdtime = totalTime / 5;

// console.log( breathTime, holdtime );

function breathAnimation ()
{
       // console.log( 'breath In!' );
       text.innerText = 'Breath In!';
       container.className = 'container grow';

       setTimeout( () =>
       {
              // console.log( 'hold' );
              text.innerText = 'Hold';
              setTimeout( () =>
              {
                     // console.log( 'breath Out!' );
                     text.innerText = 'Breath Out';
                     container.className = 'container shrink';
              }, holdtime );
       }, breathTime );
}

breathAnimation();

setInterval( breathAnimation, totalTime );
