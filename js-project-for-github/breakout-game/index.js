const rulesBtn = document.getElementById( 'rules-btn' );
const closeBtn = document.getElementById( 'close-btn' );
const rules = document.getElementById( 'rules' );
const canvas = document.getElementById( 'canvas' );
const ctx = canvas.getContext( '2d' );
let score = 0;



rulesBtn.addEventListener( 'click', () =>
{
       rules.classList.add( 'show' );
} );
closeBtn.addEventListener( 'click', () =>
{
       rules.classList.remove( 'show' );
} );

const ball = {
       x: canvas.width / 2,
       y: canvas.height / 2,
       size: 10,
       speed: 4,
       dx: 4,
       dy: -4
};

function drawBall ()
{
       ctx.beginPath();
       ctx.arc( ball.x, ball.y, ball.size, 0, Math.PI * 2 );
       ctx.fillStyle = '#0095dd';
       ctx.fill();
       ctx.closePath();
}
const paddle = {
       x: canvas.width / 2 - 40,
       y: canvas.height - 20,
       w: 80,
       h: 10,
       speed: 8,
       dx: 0
};

function drawPaddle ()
{
       ctx.beginPath();
       ctx.rect( paddle.x, paddle.y, paddle.w, paddle.h );
       ctx.fillStyle = '#0095dd';
       ctx.fill();
       ctx.closePath();
}
function drawScore ()
{
       ctx.font = '20px Arial';
       ctx.fillText( `Score: ${ score }`, canvas.width - 100, 30 );
       // width: 100 
       // height: 30
}
const brickInfo = {
       w: 70,
       h: 20,
       padding: 10,
       offsetX: 45,
       offsetY: 60,
       visible: true
};
const brickRowCount = 9;
const brickColumnCount = 5;
const bricks = [];
for ( let i = 0; i < brickRowCount; i++ )
{
       bricks[ i ] = [];
       for ( let j = 0; j < brickColumnCount; j++ )
       {

              const x = i * ( brickInfo.w + brickInfo.padding ) + brickInfo.offsetX;
              const y = j * ( brickInfo.h + brickInfo.padding ) + brickInfo.offsetY;
              bricks[ i ][ j ] = { x, y, ...brickInfo };
              // console.log( bricks[ i ][ j ] );
              // console.log( `bricks[${ i }][${ j }] =`, bricks[ i ][ j ] );
       }
       // console.log( `bricks[${ i }]=`, bricks[ i ] );
}
// console.log( bricks );
function drawBricks ()
{
       bricks.forEach( ( column ) =>
       {
              // console.log( column );
              column.forEach( ( brick ) =>
              {
                     // console.log( brick );
                     ctx.beginPath();
                     ctx.rect( brick.x, brick.y, brick.w, brick.h );
                     ctx.fillStyle = brick.visible ? '#0095dd' : 'transparent';
                     ctx.fill();
                     ctx.closePath();
              } );
       } );
}


function draw ()
{
       ctx.clearRect( 0, 0, canvas.width, canvas.height );

       drawBall();
       drawPaddle();
       drawScore();
       drawBricks();
}


function update ()
{
       movePaddle();
       moveBall();
       draw();
       requestAnimationFrame( update );
}
update();


document.addEventListener( 'keydown', keyDown );
document.addEventListener( 'keyup', keyUp );
function keyDown ( e )
{
       // console.log( e.key );
       if ( e.key === 'ArrowRight' )
       {
              paddle.dx = paddle.speed;
       } else if ( e.key === "ArrowLeft" )
       {
              paddle.dx = -paddle.speed;
       }
}

function keyUp ( e )
{
       if ( e.key === 'ArrowRight' || e.key === "ArrowLeft" )
       {
              paddle.dx = 0;
       }
}
function movePaddle ()
{
       paddle.x += paddle.dx;
       if ( paddle.x + paddle.w > canvas.width )
       {
              paddle.x = canvas.width - paddle.w;
       }
       if ( paddle.x < 0 )
       {
              paddle.x = 0;
       }
}

function moveBall ()
{
       ball.x += ball.dx;
       ball.y += ball.dy;

       if ( ball.x + ball.size > canvas.width || ball.x - ball.size < 0 )
       {
              ball.dx *= -1;
       }
       if ( ball.y + ball.size > canvas.height || ball.y - ball.size < 0 )
       {
              ball.dy *= -1;
       }
       // console.log( ball.x, ball.y );
       // paddle collision

       if ( ball.x - ball.size > paddle.x &&
              ball.x + ball.size < paddle.x + paddle.w &&
              ball.y + ball.size > paddle.y )
       {
              ball.dy = -ball.speed;
       }
       // brick collision
       bricks.forEach( column =>
       {
              column.forEach( brick =>
              {
                     if ( brick.visible )
                     {
                            if (
                                   ball.x - ball.size > brick.x &&
                                   ball.x + ball.size < brick.x + brick.w &&
                                   ball.y + ball.size > brick.y &&
                                   ball.y - ball.size < brick.y + brick.h )
                            {
                                   ball.dy *= -1;
                                   brick.visible = false;
                                   increaseScore();
                            }
                     }
              } );
       } );
       if ( ball.y + ball.size > canvas.height )
       {
              showAllBricks();
              score = 0;
       }
}

function increaseScore ()
{
       score++;
       if ( score % ( brickRowCount * brickColumnCount ) === 0 )
       {
              showAllBricks();
       }
}

function showAllBricks ()
{
       bricks.forEach( column =>
       {
              column.forEach( brick => ( brick.visible = true ) );
       } );
}
