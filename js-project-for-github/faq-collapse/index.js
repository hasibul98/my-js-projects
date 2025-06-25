const toggles = document.querySelectorAll( '.faq-toggle' );

toggles.forEach( toggle =>
{
       toggle.addEventListener( 'click', () =>
       {
              removeToggle();

              toggle.parentNode.classList.toggle( 'active' );
       } );
} );

function removeToggle ()
{
       toggles.forEach( toggle =>
       {
              toggle.parentNode.classList.remove( 'active' );
       } );
}