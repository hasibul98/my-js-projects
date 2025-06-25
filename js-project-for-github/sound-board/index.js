const sounds = [ 'applause', 'boo', 'gasp', 'tada', 'victory', 'wrong' ];

function makeSounds ()
{
       sounds.forEach( ( sound ) =>
       {
              const audio = document.createElement( 'audio' );
              audio.src = `sounds/${ sound }.mp3`;
              document.body.appendChild( audio );
              audio.id = `${ sound }`;
              const btn = document.createElement( 'button' );
              btn.classList.add( 'btn' );
              btn.innerText = sound;

              document.getElementById( 'buttons' ).appendChild( btn );

              btn.addEventListener( 'click', () =>
              {
                     stopSongs();
                     document.getElementById( sound ).play();
              } );
       } );
}

makeSounds();

function stopSongs ()
{
       sounds.forEach( sound =>
       {
              const song = document.getElementById( sound );
              song.pause();
              song.currentTime = 0;
       } );
}