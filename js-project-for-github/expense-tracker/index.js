// step 1:
const balance = document.getElementById( 'balance' );
const money_plus = document.getElementById( 'money-plus' );
const money_minus = document.getElementById( 'money-minus' );
const list = document.getElementById( 'list' );
const form = document.getElementById( 'form' );
const text = document.getElementById( 'text' );
const amount = document.getElementById( 'amount' );


// step 2:
// const dummyTransactions = [
//        { id: 1, text: 'Flower', amount: -20 },
//        { id: 2, text: 'salary', amount: 400 },
//        { id: 3, text: 'Book', amount: -20 },
//        { id: 4, text: 'camera', amount: 150 }

// ];
// step 9:
const localStorageTransaction = JSON.parse( localStorage.getItem( 'transaction' ) );

let transactions = localStorage.getItem( 'transaction' ) !== null ? localStorageTransaction : [];




// Step 3:

function addTransactionDOM ( transaction )
{
       const sign = transaction.amount < 0 ? '-' : '+';
       const item = document.createElement( 'li' );
       item.classList.add( transaction.amount < 0 ? 'minus' : "plus" );

       item.innerHTML = `${ transaction.text } <span>${ sign }${ Math.abs( transaction.amount ) } </span> <button class = 'delete-btn' onClick='removeTransaction(${ transaction.id })' >X </button>`;

       list.appendChild( item );
}

// step 8
function removeTransaction ( id )
{
       transactions = transactions.filter( ( transaction ) => transaction.id !== id );
       updateLocalStorage();
       init();
}



// step 7
// generate random id
function generateId ()
{
       return Math.floor( Math.random() * 10000000000 );
}

function addTransaction ( e )
{
       e.preventDefault();
       if ( text.value.trim() === '' || amount.value.trim() === '' )
       {
              alert( 'please add a text and amount' );
       } else
       {
              const transaction = {
                     id: generateId(),
                     text: text.value,
                     amount: +amount.value
              };
              // console.log( transaction );
              transactions.push( transaction );
              addTransactionDOM( transaction );
              updateValues();
              updateLocalStorage();
              text.value = '';
              amount.value = '';
       }
}


// step 5: 
//update the balance, income and expense
function updateValues ()
{
       const amounts = transactions.map( transaction => transaction.amount );
       // console.log( amounts );
       const total = amounts.reduce( ( acc, item ) => ( acc += item ), 0 ).toFixed( 2 );
       // console.log( total );
       const income = amounts.filter( item => item > 0 ).reduce( ( acc, item ) => ( acc += item ), 0 ).toFixed( 2 );
       // console.log( income );
       const expense = ( amounts.filter( item => item < 0 ).reduce( ( acc, item ) => ( acc += item ), 0 ) * -1 ).toFixed( 2 );
       // console.log( expense );
       balance.innerText = `$${ total }`;
       money_plus.innerText = `$${ income }`;
       money_minus.innerText = `$${ expense }`;
}



// step 10
function updateLocalStorage ()
{
       localStorage.setItem( 'transactions', JSON.stringify( transactions ) );
}

// step 4:
function init ()
{
       list.innerHTML = '';
       transactions.forEach( addTransactionDOM );
       updateValues();


}
init();





// step 6
form.addEventListener( 'submit', addTransaction );








