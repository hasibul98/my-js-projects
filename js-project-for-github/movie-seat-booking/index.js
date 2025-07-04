const container = document.querySelector( '.container' );
const seats = document.querySelectorAll( '.row .seat:not(.occupied)' );
const count = document.getElementById( 'count' );
const total = document.getElementById( 'total' );
const movieSelect = document.getElementById( 'movie' );

populateUI();

let ticketPrice = +movieSelect.value;
// console.log( typeof ticketPrice );

function setMovieData ( movieIndex, moviePrice )
{
       localStorage.setItem( 'selectedMovieIndex', movieIndex );
       localStorage.setItem( 'selectedMoviePrice', moviePrice );
}

function updateSelectedCount ()
{
       const selectedSeats = document.querySelectorAll( '.row .seat.selected' );

       const seatsIndex = [ ...selectedSeats ].map( seat => [ ...seats ].indexOf( seat ) );
       localStorage.setItem( 'selectedSeats', JSON.stringify( seatsIndex ) );

       // console.log( seatsIndex );
       // console.log( selectedSeats );
       const selectedSeatsCount = selectedSeats.length;
       // console.log( selectedSeatsCount );
       count.innerText = selectedSeatsCount;
       total.innerText = selectedSeatsCount * ticketPrice;
}
function populateUI ()
{
       const selectedSeats = JSON.parse( localStorage.getItem( 'selectedSeats' ) );
       // console.log( selectedSeats );
       if ( selectedSeats !== null && selectedSeats.length > 0 )
       {
              seats.forEach( ( seat, index ) =>
              {
                     if ( selectedSeats.indexOf( index ) > -1 )
                     {
                            seat.classList.add( 'selected' );
                     }
              } );
       }
       const selectedMovieIndex = localStorage.getItem( 'selectedMovieIndex' );
       if ( selectedMovieIndex !== null )
       {
              movieSelect.selectedIndex = selectedMovieIndex;
       }

}

movieSelect.addEventListener( 'change', ( e ) =>
{
       ticketPrice = +e.target.value;
       // console.log( e.target.selectedIndex, e.target.value );
       setMovieData( e.target.selectedIndex, e.target.value );
       updateSelectedCount();
} );

container.addEventListener( 'click', ( e ) =>
{
       // console.log( e.target );
       if ( e.target.classList.contains( 'seat' ) && !e.target.classList.contains( 'occupied' ) )
       {
              // console.log( e.target );
              e.target.classList.toggle( 'selected' );

              updateSelectedCount();
       }
} );

updateSelectedCount();

