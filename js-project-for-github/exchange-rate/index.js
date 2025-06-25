const currencyOne = document.getElementById( 'currency-one' );
const currencyTwo = document.getElementById( 'currency-two' );
const amountOne = document.getElementById( 'amount-one' );
const amountTwo = document.getElementById( 'amount-two' );
const rateEl = document.getElementById( 'rate' );
const swapBtn = document.getElementById( 'swap' );


async function loadCurrencies ()
{
       try
       {
              const res = await fetch( `https://api.exchangerate-api.com/v4/latest/USD` );
              // console.log( res );
              const data = await res.json();
              // console.log( data );
              // console.log( data.rates );
              const currencies = Object.keys( data.rates );
              // console.log( currencies );
              currencies.forEach( ( cur ) =>
              {
                     const option1 = document.createElement( 'option' );
                     option1.value = cur;
                     option1.textContent = cur;
                     currencyOne.appendChild( option1 );

                     const option2 = document.createElement( 'option' );
                     option2.value = cur;
                     option2.textContent = cur;
                     currencyTwo.appendChild( option2 );
              } );
              currencyOne.value = 'USD';
              currencyTwo.value = 'EUR';
              calculate();

       } catch ( error )
       {
              console.error( 'Failed to load currencies', error );

       }

}

async function calculate ()
{
       const base = currencyOne.value;
       const target = currencyTwo.value;
       const res = await fetch( `https://api.exchangerate-api.com/v4/latest/${ base }` );
       // console.log( res );
       const data = await res.json();
       // console.log( data );
       const rate = data.rates[ target ];
       // console.log( rate );

       rateEl.innerText = `1 ${ base } = ${ rate } ${ target }`;
       amountTwo.value = ( amountOne.value * rate ).toFixed( 2 );
}

currencyOne.addEventListener( 'change', calculate );
currencyTwo.addEventListener( 'change', calculate );
amountOne.addEventListener( 'input', calculate );

swapBtn.addEventListener( 'click', () =>
{
       [ currencyOne.value, currencyTwo.value ] = [ currencyTwo.value, currencyOne.value ];
       calculate();
} );

loadCurrencies();