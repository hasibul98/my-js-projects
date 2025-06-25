const button = document.getElementById( 'button' );
const toasts = document.getElementById( 'toasts' );

const messages = [
       'Message One',
       'Message Two',
       'Message Three',
       'Message Four'
];

button.addEventListener( 'click', () => createNotification() );

const types = [ 'info', 'success', 'error' ];
function getRandomType ()
{
       return types[ Math.floor( Math.random() * types.length ) ];
}

function createNotification ( message = null, type = null)
{
       // console.log( 123 );
       const notifi = document.createElement( 'div' );
       notifi.classList.add( 'toast' );
       notifi.classList.add( type ? type : getRandomType() );
       notifi.innerText = message ? message : getRandomMessage();
       toasts.appendChild( notifi );
       setTimeout( () =>
       {
              notifi.remove();
       }, 3000)
}

function getRandomMessage ()
{
       return messages[Math.floor(Math.random() * messages.length)]
}