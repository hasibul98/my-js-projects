const textEl = document.getElementById( 'text' );
const speedEl = document.getElementById( 'speed' );
const text = "We Love Programming!";
let idx = 1;

let speed = 300 / speedEl.value;

writeText();

function writeText ()
{
       textEl.innerText = text.slice( 0, idx );
       idx++;
       if ( idx < text.length )
       {
              setTimeout( writeText, speed ); 
       } else
       {
              setTimeout(deleteText, speed)
       }
       
}

function deleteText ()
{
       textEl.innerText = text.slice( 0, idx );
       idx--;
       if ( idx > 0 )
       {
              setTimeout(deleteText, speed)
       } else
       {
              idx = 1;
              setTimeout( writeText, speed );
       }
}

writeText();