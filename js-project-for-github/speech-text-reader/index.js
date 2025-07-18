const main = document.querySelector( 'main' );
const voicesSelect = document.getElementById( 'voices' );
const textarea = document.getElementById( 'text' );
const readBtn = document.getElementById( 'read' );
const toggleBtn = document.getElementById( 'toggle' );
const closeBtn = document.getElementById( 'close' );

const data = [
       {
              image: './img/drink.jpg',
              text: "I'm Thirsty"
       },
       {
              image: './img/food.jpg',
              text: "I'm Hungry"
       },
       {
              image: './img/tired.jpg',
              text: "I'm Tired"
       },
       {
              image: './img/hurt.jpg',
              text: "I'm Hurt"
       },
       {
              image: './img/happy.jpg',
              text: "I'm Happy"
       },
       {
              image: './img/angry.jpg',
              text: "I'm Angry"
       },
       {
              image: './img/sad.jpg',
              text: "I'm Sad"
       },
       {
              image: './img/scared.jpg',
              text: "I'm Scared"
       },
       {
              image: './img/outside.jpg',
              text: 'I Want To Go Outside'
       },
       {
              image: './img/home.jpg',
              text: 'I Want To Go Home'
       },
       {
              image: './img/school.jpg',
              text: 'I Want To Go To School'
       },
       {
              image: './img/grandma.jpg',
              text: 'I Want To Go To Grandmas'
       }
];


data.forEach( createBox );


function createBox ( item )
{
       const box = document.createElement( 'div' );
       box.classList.add( 'box' );
       const { image, text } = item;

       box.innerHTML = `
       <img src= '${ image }' alt= '${ text }' />
       <p class = 'info' > ${ text } </p>
       `;
       box.addEventListener( 'click', () =>
       {
              setTextMessage( text );
              speakText();
              box.classList.add( 'active' );
              setTimeout( () =>
              {
                     box.classList.remove( 'active' );
              }, 800 );
       } );
       main.appendChild( box );
}
speechSynthesis.addEventListener( 'voiceschanged', getVoices );

toggleBtn.addEventListener( 'click', () => document.getElementById( 'text-box' ).classList.toggle( 'show' ) );

closeBtn.addEventListener( 'click', () => document.getElementById( 'text-box' ).classList.remove( 'show' ) );

const message = new SpeechSynthesisUtterance();
console.log( message );

let voices = [];
// console.log( 'spechSynthesis:' + speechSynthesis.getVoices() );

function getVoices ()
{
       voices = speechSynthesis.getVoices();
       // console.log( voices );
       voicesSelect.innerHTML = "";
       voices.forEach( voice =>
       {
              const option = document.createElement( 'option' );
              option.value = voice.name;
              option.innerText = `${ voice.name } ${ voice.lang }`;
              voicesSelect.appendChild( option );
       } );
       const savedVoice = localStorage.getItem( 'aivoice' );
       if ( savedVoice )
       {
              voicesSelect.value = savedVoice;
              message.voice = voices.find( voice => voice.name === savedVoice );
       }
}
function setTextMessage ( text )
{
       message.text = text;
}

function speakText ()
{
       speechSynthesis.speak( message );
}

voicesSelect.addEventListener( 'change', setVoice );
function setVoice ( e )
{
       localStorage.setItem( 'aivoice', e.target.value );
       message.voice = voices.find( voice => voice.name === e.target.value );


}

readBtn.addEventListener( 'click', () =>
{
       setTextMessage( textarea.value );
       speakText();
} );


getVoices();
