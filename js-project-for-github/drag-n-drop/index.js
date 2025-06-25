const fill = document.querySelector( '.fill' );
const empties = document.querySelectorAll( '.empty' );
const body = document.body;

body.addEventListener( 'dragstart', dragStart );
body.addEventListener( 'dragend', dragEnd );

for ( const empty of empties )
{
       empty.addEventListener( 'dragover', dragOver );
       empty.addEventListener( 'dragenter', dragEnter );
       empty.addEventListener( 'dragleave', dragLeave );
       empty.addEventListener( 'drop', dragDrop );
}

function dragStart ( e )
{

       if ( !e.target.classList.contains( "fill" ) )
       {
              e.preventDefault();
              return;
       }
       console.log( 'drag start' );
       fill.className += ' hold';
       // setTimeout( () => fill.className = 'invisible', 0 );
}
function dragEnd ()
{
       console.log( 'drag end' );
       fill.className = 'fill';
}
function dragOver ( e )
{
       console.log( 'drag over' );
       e.preventDefault();
}
function dragEnter ( e )
{
       console.log( 'drag Enter' );
       e.preventDefault();
       this.className += ' hovered';
}
function dragLeave ()
{
       console.log( 'drag leave' );
       this.className = 'empty';
}
function dragDrop ()
{
       console.log( 'drag drop' );
       this.className = 'empty';
       this.append( fill );
}
