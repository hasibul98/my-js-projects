const hourEl = document.querySelector( '.hour' );
const minuteEl = document.querySelector( '.minute' );
const secondEl = document.querySelector( '.second' );
const timeEl = document.querySelector( '.time' );
const dateEl = document.querySelector( '.date' );
const toggle = document.querySelector( '.toggle' );

const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

toggle.addEventListener( 'click', ( e ) =>
{
       const html = document.querySelector( 'html' );
       if ( html.classList.contains( 'dark' ) )
       {
              html.classList.remove( 'dark' );
              e.target.innerHTML = 'Dark mode';
       } else
       {
              html.classList.add( 'dark' );
              e.target.innerHTML = 'Light mode';
       }
} );

function setTime ()
{
       const time = new Date();
       const month = time.getMonth();
       const day = time.getDay();
       const date = time.getDate();
       const hours = time.getHours();
       const hoursForClock = hours % 12; // <-- এখানে ঠিক করা হয়েছে
       const minutes = time.getMinutes();
       const seconds = time.getSeconds();
       const ampm = hours >= 12 ? 'PM' : 'AM';
       hourEl.style.transform = `translate(-50%, -100%) rotate(${ scale( hoursForClock, 0, 11, 0, 360 ) }deg)`;
       minuteEl.style.transform = `translate(-50%, -100%) rotate(${ scale( minutes, 0, 59, 0, 360 ) }deg)`;
       secondEl.style.transform = `translate(-50%, -100%) rotate(${ scale( seconds, 0, 59, 0, 360 ) }deg)`;
       timeEl.innerHTML = `${ hoursForClock === 0 ? 12 : hoursForClock }:${ minutes < 10 ? `0${ minutes }` : minutes }  : ${ seconds < 10 ? `0${ seconds }` : seconds } ${ ampm }`;
       dateEl.innerHTML = `${ days[ day ] }, ${ months[ month ] } <span class='circle'>${ date }</span>`;
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = ( num, in_min, in_max, out_min, out_max ) =>
{
       return ( num - in_min ) * ( out_max - out_min ) / ( in_max - in_min ) + out_min;
};


const clockFace = document.querySelector( '.clock-face' );
for ( let i = 1; i <= 12; i++ )
{
       const number = document.createElement( 'div' );
       number.classList.add( 'clock-number' );
       number.innerText = i;
       const angle = ( ( i - 3 ) * 30 );
       // number.style.position = 'absolute';
       // number.style.top = '50%';
       // number.style.left = '50%';
       number.style.transform = `rotate(${ angle }deg) translate(120px) rotate(${ -angle }deg) translate(-50%, -50%)`;
       clockFace.appendChild( number );
}



setTime();
setInterval( setTime, 1000 );