const search = document.getElementById( 'search' );
const submit = document.getElementById( 'submit' );
const random = document.getElementById( 'random' );
const mealsEl = document.getElementById( 'meals' );
const resultHeading = document.getElementById( 'result-heading' );
const single_mealEl = document.getElementById( 'single-meal' );

function searchMeal ( e )
{
       e.preventDefault();
       single_mealEl.innerHTML = '';

       const term = search.value;
       // console.log( term );
       if ( term.trim() )
       {
              fetch( `https://www.themealdb.com/api/json/v1/1/search.php?s=${ term }` )
                     .then( res => res.json() )
                     .then( data =>
                     {
                            // console.log( data );
                            resultHeading.innerHTML = `<h2> Search results for '${ term }': </h2>`;
                            if ( data.meals === null )
                            {
                                   resultHeading.innerHTML = `<p> There is no search results. Try again! </p>`;
                            } else
                            {
                                   mealsEl.innerHTML = data.meals.map( meal => `
                                          <div class='meal'>
                                          <img src = '${ meal.strMealThumb }' alt = '${ meal.strMeal }' />
                                          <div class = 'meal-info' data-mealID = '${ meal.idMeal }'>
                                          <h3> ${ meal.strMeal } </h3>

                                          </div>
                                          </div>
                                          `).join( '' );
                            }
                     } );
              search.value = '';

       } else
       {
              alert( 'please enter a search term' );
       }
}

submit.addEventListener( 'submit', searchMeal );
random.addEventListener( 'click', getRandomMeal );

mealsEl.addEventListener( 'click', e =>
{
       const mealInfo = e.composedPath().find( item =>
       {
              // console.log( item );
              if ( item.classList )
              {
                     // console.log( item.classList.contains( 'meal-info' ) );
                     return item.classList.contains( 'meal-info' );
              } else
              {
                     return false;
              }

       } );
       // console.log( mealInfo );
       if ( mealInfo )
       {
              const mealID = mealInfo.getAttribute( 'data-mealid' );
              // console.log( mealID );
              getMealById( mealID );
       }
} );

function getMealById ( mealID )
{
       fetch( `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ mealID }` )
              .then( res => res.json() )
              .then( data =>
              {
                     console.log( data );
                     const meal = data.meals[ 0 ];

                     addMealToDOM( meal );
              } );
}


function addMealToDOM ( meal )
{
       const ingredients = [];
       for ( let i = 1; i <= 20; i++ )
       {
              if ( meal[ `strIngredient${ i }` ] )
              {
                     ingredients.push( `${ meal[ `strIngredient${ i }` ] } - ${ meal[ `strMeasure${ i }` ] } ` );
              } else
              {
                     break;
              }
       }
       single_mealEl.innerHTML = `<div class='single-meal'>
       <h1>${ meal.strMeal }</h1>
       <img src='${ meal.strMealThumb }' alt = '${ meal.strMeal }' />
       <div class='single-meal-info'>
       ${ meal.strCategory ? `<p>${ meal.strCategory } </p>` : '' }
       ${ meal.strArea ? `<p>${ meal.strArea } </p>` : '' }
       </div>
       <div class='main'>
              <p> ${ meal.strInstructions } </p>
              <h2> Ingredients </h1>
              <ul>
              ${ ingredients.map( ing => `<li> ${ ing } </li>` ).join( '' ) }
       </div>
        </div>`;
};;

function getRandomMeal ()
{
       mealsEl.innerHTML = '';
       resultHeading.innerHTML = '';

       fetch( `https://www.themealdb.com/api/json/v1/1/random.php` )
              .then( res => res.json() )
              .then( data =>
              {
                     const meal = data.meals[ 0 ];

                     addMealToDOM( meal );
              } );

}