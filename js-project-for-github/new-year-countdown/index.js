const days = document.getElementById( 'days' );
const hours = document.getElementById( 'hours' );
const minutes = document.getElementById( 'minutes' );
const seconds = document.getElementById( 'seconds' );
const countdown = document.getElementById( 'countdown' );
const year = document.getElementById( 'year' );
const loading = document.getElementById( 'loading' );

const currentYear = new Date().getFullYear();
// console.log( currentYear );

const newYearTime = new Date( `january 01 ${ currentYear + 1 } 00:00:00` );

year.innerText = currentYear + 1;

function updateCountdown ()
{
       const currentTime = new Date();
       // console.log( currentTime );
       const diff = newYearTime - currentTime;
       // console.log( diff );
       const d = Math.floor( diff / 1000 / 60 / 60 / 24 );
       const h = Math.floor( diff / 1000 / 60 / 60 ) % 24;
       const m = Math.floor( diff / 1000 / 60 ) % 60;
       const s = Math.floor( diff / 1000 ) % 60;
       // console.log( ' d ' + d, ' h ' + h, ' m ' + m, ' s ' + s );
       days.innerHTML = d;
       hours.innerHTML = h < 10 ? '0' + h : h;
       minutes.innerHTML = m < 10 ? '0' + m : m;
       seconds.innerHTML = s < 10 ? '0' + s : s;
}

setTimeout( () =>
{
       loading.remove();
       countdown.style.display = 'flex';
}, 1000 );

setInterval( updateCountdown, 1000 );
// updateCountdown();