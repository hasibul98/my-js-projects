const word = document.getElementById( 'word' );
const text = document.getElementById( 'text' );
const scoreEl = document.getElementById( 'score' );
const timeEl = document.getElementById( 'time' );
const endgameEl = document.getElementById( 'end-game-container' );
const settingsBtn = document.getElementById( 'settings-btn' );
const settings = document.getElementById( 'settings' );
const settingsForm = document.getElementById( 'settings-form' );
const difficultySelect = document.getElementById( 'difficulty' );


let words = [];
let randomWord;
let score = 0;
let time = 10;
let timeInterval;

let difficulty = localStorage.getItem( 'difficulty' ) != null ? localStorage.getItem( 'difficulty' ) : 'medium';

timeEl.innerHTML = time;
text.focus();
text.addEventListener( 'click', ( e ) =>
{
       timeInterval = setInterval( updateTime, 1000 );
} );

difficultySelect.value = localStorage.getItem( 'difficulty' ) !== null ? localStorage.getItem( 'difficulty' ) : 'medium';

fetch( `words.txt` )
       .then( res => res.text() )
       .then( text =>
       {
              // const lines = text.split( '\n' );
              // console.log( lines );
              // const trimmed = lines.map( w => w.trim() );
              // console.log( trimmed );
              // const words = trimmed.filter( Boolean );
              // console.log( words );
              words = text.split( '\n' ).map( w => w.trim() ).filter( Boolean );

              addWordToDOM();

              // console.log( words );
              // console.log( getRandomWord() );
       } );



function getRandomWord ()
{
       return words[ Math.floor( Math.random() * words.length ) ];
}

// console.log( getRandomWord() );
// console.log( words );
// wordsData();

function addWordToDOM ()
{
       randomWord = getRandomWord();
       word.innerHTML = randomWord;
}

addWordToDOM();

text.addEventListener( 'input', ( e ) =>
{
       const insertedText = e.target.value;
       // console.log( insertedText );
       if ( insertedText === randomWord )
       {
              addWordToDOM();
              updateScore();

              e.target.value = '';
              // time += 5;
              if ( difficulty === 'hard' )
              {
                     time += 3;
              } else if ( difficulty === 'medium' )
              {
                     time += 5;
              } else
              {
                     time += 7;
              }
              updateTime();
       }
} );

function updateScore ()
{
       score++;
       scoreEl.innerHTML = score;
}

function updateTime ()
{
       timeEl.innerHTML = '';
       // console.log( 1 );
       time--;
       timeEl.innerHTML = time + 's';

       if ( time === 0 )
       {
              clearInterval( timeInterval );
              gameOver();
       }
}


function gameOver ()
{
       endgameEl.innerHTML = `
              <h1> Time ran out </h1>
              <p> Your final score is ${ score } </p>
              <button onclick = 'location.reload()'> Reload </button>
       `;

       endgameEl.style.display = 'flex';
}

settingsBtn.addEventListener( 'click', () =>
{
       settings.classList.toggle( 'hide' );
} );

settingsForm.addEventListener( 'change', ( e ) =>
{
       difficulty = e.target.value;
       // console.log( difficulty );
       localStorage.setItem( 'difficulty', difficulty );

} )


