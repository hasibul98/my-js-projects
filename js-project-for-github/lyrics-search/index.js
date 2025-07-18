const form = document.getElementById( 'form' );
const search = document.getElementById( 'search' );
const result = document.getElementById( 'result' );
const more = document.getElementById( 'more' );

const apiURL = 'https://api.lyrics.ovh';

form.addEventListener( 'submit', e =>
{
       e.preventDefault();
       const searchTerm = search.value.trim();
       // console.log(searchTerm);
       if ( !searchTerm )
       {
              alert( 'please type in a search term' );
       } else
       {
              searchSongs( searchTerm );
       }
} );

async function searchSongs ( term )
{
       const res = await fetch( `${ apiURL }/suggest/${ term }` );
       const data = await res.json();

       // console.log( data );
       showData( data );
}

function showData ( data )
{
       result.innerHTML = `
       <ul class= 'songs'>
        ${ data.data.map( song => `<li>
              <span><strong>${ song.artist.name } </strong> - ${ song.title } </span>
              <button class='btn' data-artist = '${ song.artist.name }' data-songtitle="${ song.title }">${ song.title }Get Lyrics  </button>
              </li>` ).join( '' ) }
       </ul>
       `;
       if ( data.prev || data.next )
       {
              more.innerHTML = `
      ${ data.prev ? `<button class="btn" onclick="getMoreSongs('${ data.prev }')">Prev</button>` : '' }
      ${ data.next ? `<button class="btn" onclick="getMoreSongs('${ data.next }')">Next</button>` : '' }
    `;
       } else
       {
              more.innerHTML = '';
       }
}
// https://cors-anywhere.herokuapp.com/corsdemo

async function getMoreSongs ( url )
{
       const res = await fetch( `https://cors-anywhere.herokuapp.com/${ url }` );

       const data = await res.json();
       // console.log( data );

       showData( data );


}


result.addEventListener( 'click', e =>
{
       // console.log( e.target );
       const clickedEl = e.target;
       if ( clickedEl.tagName === "BUTTON" )
       {
              // console.log( 123 );
              const artist = clickedEl.getAttribute( 'data-artist' );
              const songTitle = clickedEl.getAttribute( 'data-songtitle' );
              getLyrics( artist, songTitle );
       }
} );

async function getLyrics ( artist, songTitle )
{
       const res = await fetch( `${ apiURL }/v1/${ artist }/${ songTitle }` );
       const data = await res.json();

       // console.log( data );
       const lyrics = data.lyrics.replace( /(\r\n|\r|\n)/g, '<br>' );
       // console.log( lyrics );
       result.innerHTML = `
       <h2> <strong>${ artist } </strong> - ${ songTitle } </h2>
       <span> ${ lyrics }  </span>
       `;
}
