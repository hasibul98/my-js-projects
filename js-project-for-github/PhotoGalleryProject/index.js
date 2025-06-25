const btnEl = document.getElementById( 'btn' );
const errorMessageEl = document.getElementById( "errorMessage" );
const galleryEl = document.getElementById( 'gallery' );

async function fetchImage ()
{
       const inputValue = document.getElementById( 'input' ).value;
       if ( inputValue > 30 || inputValue < 1 )
       {
              errorMessageEl.style.display = "block";
              errorMessageEl.innerText = `"Number should be between 0 and 31"`;
              return;
       }


       try
       {
              btnEl.style.display = "none";
              let loading = `<div id = "spinner" class="spinner"></div>`;
              galleryEl.innerHTML = loading;
              await fetch( `https://api.unsplash.com/photos?per_page=${ inputValue }&page=${ Math.round( Math.random() * 1000 ) }&client_id=B8S3zB8gCPVCvzpAhCRdfXg_aki8PZM_q5pAyzDUvlc` )
                     .then( ( res ) => res.json() )
                     .then( ( datas ) => datas.forEach( ( data ) =>
                     {
                            let imgEl = document.createElement( 'img' );
                            imgEl.src = data.urls.full;

                            galleryEl.appendChild( imgEl );

                     } ) );

              let spinerEl = document.getElementById( 'spinner' );
              spinerEl.style.display = "none";
              btnEl.style.display = "block";

       } catch ( error )
       {
              console.log( error );
              errorMessageEl.style.display = "block";
              errorMessageEl.innerHTML = "An error happened, try again later";




       }

}
btnEl.addEventListener( "click", fetchImage );