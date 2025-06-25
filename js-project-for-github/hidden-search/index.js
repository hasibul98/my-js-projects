const search = document.querySelector( '.search' );
const btn = document.querySelector( '.btn' );
const input = document.querySelector( '.input' );

btn.addEventListener( 'click', () =>
{
       search.classList.toggle( 'active' );
       input.focus();
} );
window.addEventListener( 'click', ( e ) =>
{
       if ( !search.contains( e.target ) && search.classList.contains( 'active' ) )
       {
              search.classList.remove( 'active' );
       }
} );