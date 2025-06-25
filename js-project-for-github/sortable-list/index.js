const draggable_list = document.getElementById( 'draggable-list' );
const check = document.getElementById( 'check' );



const richestPeople = [
       'Jeff Bezos',
       'Bill Gates',
       'Warren Buffett',
       'Bernard Arnault',
       'Carlos Slim Helu',
       'Amancio Ortega',
       'Larry Ellison',
       'Mark Zuckerberg',
       'Michael Bloomberg',
       'Larry Page'
];
let listItems = [];
let dragStartIndex;

createList();

function createList ()
{
       // console.log( [ ...richestPeople ] );
       // console.log( richestPeople );
       [ ...richestPeople ]
              .map( a =>
              {
                     // console.log( a );
                     return { value: a, sort: Math.random() };
              } )
              .sort( ( a, b ) => a.sort - b.sort )
              .map( a => a.value )
              .forEach( ( person, index ) =>
              {
                     // console.log( person );
                     const listItem = document.createElement( 'li' );
                     listItem.setAttribute( 'data-index', index );
                     listItem.innerHTML = `
              <span class = 'number' >${ index + 1 } </span>
              <div class= 'draggable' draggable= 'true'>
              <p class='person-name'>${ person } </p>
              <i class='fas fa-grip-lines'> </i>
              </div>
              `;
                     listItems.push( listItem );
                     draggable_list.appendChild( listItem );
              } );
       addEventListeners();
}

function addEventListeners ()
{
       const draggables = document.querySelectorAll( '.draggable' );
       const dragListItems = document.querySelectorAll( '.draggable-list li' );

       draggables.forEach( draggable =>
       {
              draggable.addEventListener( 'dragstart', dragStart );
       } );
       dragListItems.forEach( item =>
       {
              item.addEventListener( 'dragover', dragOver );
              item.addEventListener( 'drop', dragDrop );
              item.addEventListener( 'dragenter', dragEnter );
              item.addEventListener( 'dragleave', dragLeave );
       } );
}

function dragStart ()
{
       // console.log( 'event', 'dragstart' );
       // console.log( this );
       dragStartIndex = +this.closest( 'li' ).getAttribute( 'data-index' );
       // console.log( dragStartIndex );
}
function dragEnter ()
{
       // console.log( 'event', 'dragEnter' );
       this.classList.add( 'over' );
       // this.classList.remove( 'green' );

}
function dragLeave ()
{
       // console.log( 'event', 'dragLeave' );
       this.classList.remove( 'over' );
       // this.classList.remove( 'green' );

}
function dragOver ( e )
{
       // console.log( this );
       // console.log( 'event', 'dragOver' );
       // setTimeout( () =>
       // {
       // this.classList.add( 'green' );

       // }, 2000 );
       e.preventDefault();



}
function dragDrop ()
{
       // console.log( 'event', 'dragDrop' );
       // this.classList.remove( 'green' );
       // console.log( this );
       const dragEndIndex = +this.getAttribute( 'data-index' );
       // console.log( dragEndIndex );
       swapItems( dragStartIndex, dragEndIndex );
       this.classList.remove( 'over' );

}

function swapItems ( fromIndex, toIndex )
{
       // console.log( 123 );
       const itemOne = listItems[ fromIndex ].querySelector( '.draggable' );
       const itemTwo = listItems[ toIndex ].querySelector( '.draggable' );

       // console.log( 'ítemOne', itemOne, '\n', 'itemTwo', itemTwo );
       listItems[ fromIndex ].appendChild( itemTwo );
       listItems[ toIndex ].appendChild( itemOne );
}

check.addEventListener( 'click', checkOrder );

function checkOrder ()
{
       listItems.forEach( ( listItem, index ) =>
       {
              const personName = listItem.querySelector( '.draggable' ).innerText.trim();

              if ( personName !== richestPeople[ index ] )
              {
                     listItem.classList.add( 'wrong' );
              } else
              {
                     listItem.classList.remove( 'wrong' );
                     listItem.classList.add( 'right' );
              }
       } );
}

