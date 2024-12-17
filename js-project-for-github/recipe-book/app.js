const API_KEY = "6f072f55240e41c5967ae3ec10522875";
let recipeListEl = document.getElementById('recipe-list');


       

function displayRecipes(recipes){
       recipeListEl.innerHTML= '';
      recipes.forEach((recipe)=>{
              
       
let recipeItmEl = document.createElement('li');
recipeItmEl.classList.add('recipe-item');
let recipeimgEl = document.createElement('img');
recipeimgEl.src= recipe.image;
recipeimgEl.alt= 'recipe-image';
let recipeTitleEl = document.createElement('h1');
recipeTitleEl.innerText= recipe.title;

let recipePEl = document.createElement('p');
recipePEl.innerHTML = `
<strong>Ingredients:</strong> ${recipe.extendedIngredients
  .map((ingredient) => ingredient.original).join(", ")}
`;

let recipeLinkEl = document.createElement('a');
recipeLinkEl.href= recipe.sourceUrl;
recipeLinkEl.innerText= 'view Recipe';

recipeItmEl.appendChild(recipeimgEl);
recipeItmEl.appendChild(recipeTitleEl);
recipeItmEl.appendChild(recipePEl);
recipeItmEl.appendChild(recipeLinkEl);

recipeListEl.appendChild(recipeItmEl);
      })

}
                     
             



async function getRecipes(){
       let response = await fetch(`https://api.spoonacular.com/recipes/random?number=50&apiKey=${API_KEY}`);
       let data = await response.json();
       return data.recipes;
       // console.log(data.recipes);
}

async function init() {
       let recipes = await getRecipes();
       displayRecipes(recipes);
       console.log(recipes);
}

init();
// getRecipes();
