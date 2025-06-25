const canvas = document.getElementById( 'canvas' );
const ctx = canvas.getContext( '2d' );
const increaseEl = document.getElementById( 'increase' );
const decreaseEl = document.getElementById( 'decrease' );
const sizeEl = document.getElementById( 'size' );
const clearEl = document.getElementById( 'clear' );

let size = 10;
sizeEl.innerHTML = size;
let colorInput = document.getElementById( 'color' );
let color;
let isPressed = false;
let x;
let y;

clearEl.addEventListener( 'click', () =>
{
       ctx.clearRect( 0, 0, canvas.width, canvas.height );
} );

increaseEl.addEventListener( 'click', () =>
{
       size++;
       if ( size > 80 )
       {
              size = 80;
       }
       sizeEl.innerHTML = size;
} );
decreaseEl.addEventListener( 'click', () =>
{
       size--;
       if ( size < 0 )
       {
              size = 0;
       }
       sizeEl.innerHTML = size;
} );

canvas.addEventListener( 'mousedown', ( e ) =>
{
       isPressed = true;

       x = e.offsetX;
       y = e.offsetY;
       // console.log( isPressed, x, y );
} );
canvas.addEventListener( 'mouseup', ( e ) =>
{
       isPressed = false;
       x = undefined;
       y = undefined;

       // console.log( isPressed, x, y );
} );
canvas.addEventListener( 'mousemove', ( e ) =>
{
       if ( isPressed )
       {
              const x2 = e.offsetX;
              const y2 = e.offsetY;

              // console.log( x2, y2 );
              drawCircle( x2, y2 );
              drawLine( x, y, x2, y2 );
              x = x2;
              y = y2;
       }
} );

colorInput.addEventListener( 'input', changeColor );
function drawCircle ( x, y )
{

       ctx.beginPath();
       ctx.arc( x, y, size, 0, Math.PI * 2 );
       // ctx.fillStyle = color;
       ctx.fillStyle = color;
       ctx.fill();
}

function changeColor ( e )
{

       color = e.target.value;
       // drawCircle( 100, 200 );
}

function drawLine ( x1, y1, x2, y2 )
{
       ctx.beginPath();
       ctx.moveTo( x1, y1 );
       ctx.lineTo( x2, y2 );
       ctx.strokeStyle = color;
       ctx.lineWidth = size * 2;
       ctx.stroke();

}

// drawCircle( 100, 200 );
// drawLine( 300, 300, 300, 500 );


