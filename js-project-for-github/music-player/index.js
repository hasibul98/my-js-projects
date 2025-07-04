const musicContainer = document.getElementById( 'music-container' );
const playBtn = document.getElementById( 'play' );
const prevBtn = document.getElementById( 'prev' );
const nextBtn = document.getElementById( 'next' );
const audion = document.getElementById( 'audio' );

const progress = document.getElementById( 'progress' );
const progressContainer = document.getElementById( 'progress-container' );
const title = document.getElementById( 'title' );
const cover = document.getElementById( 'cover' );


const songs = [ 'hey', 'summer', 'ukulele' ];

let songIndex = 2;

loadSong( songs[ songIndex ] );

function loadSong ( song )
{
       title.innerText = song;
       audio.src = `music/${ song }.mp3`;
       cover.src = `images/${ song }.jpg`;

}

function playSong ()
{
       musicContainer.classList.add( 'play' );
       playBtn.querySelector( 'i.fas' ).classList.remove( 'fa-play' );
       playBtn.querySelector( 'i.fas' ).classList.add( 'fa-pause' );

       audio.play();
}

function pauseSong ()
{
       musicContainer.classList.remove( 'play' );
       playBtn.querySelector( 'i.fas' ).classList.add( 'fa-play' );
       playBtn.querySelector( 'i.fas' ).classList.remove( 'fa-pause' );

       audio.pause();
}

function prevSong ()
{
       songIndex--;
       if ( songIndex < 0 )
       {
              songIndex = songs.length - 1;
       }
       loadSong( songs[ songIndex ] );

       playSong();
}
function nextSong ()
{
       songIndex++;
       if ( songIndex > songs.length - 1 )
       {
              songIndex = 0;
       }
       loadSong( songs[ songIndex ] );

       playSong();
}

function updateProgress ( e )
{
       // console.log( e.srcElement );
       const { duration, currentTime } = e.srcElement;
       // console.log( duration, currentTime );
       const progressPercent = ( currentTime / duration ) * 100;
       // console.log( progressPercent );
       progress.style.width = `${ progressPercent }%`;
}

function setProgress ( e )
{
       const width = this.clientWidth;
       // console.log( width );
       const clickX = e.offsetX;
       // console.log( clickX );
       const duration = audio.duration;

       audio.currentTime = ( clickX / width ) * duration;
}


playBtn.addEventListener( 'click', () =>
{
       const isPlaying = musicContainer.classList.contains( 'play' );

       if ( isPlaying )
       {
              pauseSong();
       } else
       {
              playSong();
       }
} );



prevBtn.addEventListener( 'click', prevSong );
nextBtn.addEventListener( 'click', nextSong );
audio.addEventListener( 'timeupdate', updateProgress );

progressContainer.addEventListener( 'click', setProgress );

audio.addEventListener( 'ended', nextSong );
