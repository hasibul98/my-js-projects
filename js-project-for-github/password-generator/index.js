const resultEl = document.getElementById( 'result' );
const lengthEl = document.getElementById( 'length' );
const uppercaseEl = document.getElementById( 'uppercase' );
const lowercaseEl = document.getElementById( 'lowercase' );
const numbersEl = document.getElementById( 'numbers' );
const symbolsEl = document.getElementById( 'symbols' );
const generateEl = document.getElementById( 'generate' );
const clipboardEl = document.getElementById( 'clipboard' );

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol, 
};
generateEl.addEventListener( 'click', () =>
{
       const length = +lengthEl.value;
       // console.log( length );
       const hasLower = lowercaseEl.checked;
       const hasUpper = uppercaseEl.checked;
       const hasNumber = numbersEl.checked;
       const hasSymbol = symbolsEl.checked;
       // console.log( hasLower, hasUpper, hasNumber, hasSymbol );
       resultEl.innerText = generatePassword( hasLower, hasUpper, hasNumber, hasSymbol, length );
} )
function generatePassword ( lower, upper, number, symbol, length )
{
       let generatePassword = '';
       const typesCount = lower + upper + number + symbol;
       // console.log( typesCount );
       const typesArr = [ { lower }, { upper }, { number }, { symbol } ].filter( item => Object.values( item )[ 0 ] );
       // console.log(typesArr)
       // console.log(
       //   [{ lower }, { upper }, { number }, { symbol }].filter(
       //     (item) => Object.values(item)[0]
       //   )
       // );
       if ( typesCount === 0 )
       {
              return '';
       }
       for ( let i = 0; i < length; i += typesCount )
       {
              typesArr.forEach( (type, index) =>
              {
                     // console.log( type );
                     const funcName = Object.keys( type )[ 0 ]
                     console.log( funcName );
                     generatePassword += randomFunc[ funcName ]();
                     // console.log( generatePassword + "\n index:"+ index );
              })
       }
       const finalPassword = generatePassword.slice( 0, length );
       // console.log( finalPassword );

       return finalPassword;
       
}
clipboardEl.addEventListener( 'click', () =>
{
       
       const password = resultEl.innerText;
       if ( !password ) { return; };
       navigator.clipboard.writeText(password)
       alert(`password copied to clipboard ${password}`);

})
function getRandomLower ()
{
       return String.fromCharCode(Math.floor(Math.random() * 26) + 97 );
}
function getRandomUpper ()
{
       return String.fromCharCode( Math.floor( Math.random() * 26 ) + 65 );
}
// console.log( getRandomLower() );
// console.log( getRandomUpper() );
function getRandomNumber ()
{
       return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol ()
{
       const symbols = '!@#$$%^&*()_-+/|\\{}';
       // return symbols[1];
       return symbols[Math.floor(Math.random() * symbols.length)];
}
// console.log( getRandomSymbol() );