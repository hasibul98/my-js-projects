const toggle = document.getElementById( 'toggle' );
const close = document.getElementById( 'close' );
const open = document.getElementById( 'open' );
const modal = document.getElementById( 'modal' );
const navbar = document.getElementById( 'navbar' );

function closeNavbar ( e )
{
       if ( document.body.classList.contains( 'show-nav' ) && e.target !== toggle && !toggle.contains( e.target ) && e.target !== navbar && !navbar.contains( e.target ) )
       {
              document.body.classList.toggle( 'show-nav' );
              document.body.removeEventListener( 'click', closeNavbar );
       } else if ( !document.body.classList.contains( 'show-nav' ) )
       {
              document.body.removeEventListener( 'click', closeNavbar );
       }
}

toggle.addEventListener( 'click', () =>
{
       document.body.classList.toggle( 'show-nav' );
       document.body.addEventListener( 'click', closeNavbar );
} );

open.addEventListener( 'click', () => modal.classList.add( 'show-modal' ) );

close.addEventListener( 'click', () => modal.classList.remove( 'show-modal' ) );

window.addEventListener( 'click', ( e ) =>
{
       e.target == modal ? modal.classList.remove( 'show-modal' ) : false;
} )

