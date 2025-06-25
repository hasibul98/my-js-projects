const APIURL = "https://api.github.com/users/";
const form = document.getElementById( 'form' );
const search = document.getElementById( 'search' );
const main = document.getElementById( 'main' );

// getUser( 'hasibul98' );


async function getUser(username) {
       
       try
       {
         const { data } = await axios(APIURL + username);
              // console.log( data );
              createUserCard( data );
              getRepos( username );
       } catch ( err )
       {
              if ( err.response.status === 404 )
              {
                // console.log(err)
                createErrorCard("No profile with this username");
              }
              
       }
}
form.addEventListener( 'submit', ( e ) =>
{
       e.preventDefault();
       const user = search.value;
       if ( user.trim() )
       {
              getUser( user );
              // console.log( getUser( user ) );
              search.value = '';
       }
})

function createUserCard (user)
{
       const cardHTML = `
              <div>
              <div>
              <img src= "${user.avatar_url}" alt= "${user.avatar_url}" class="avatar"  />
              </div>
              <div class="user-info">
              <h2> ${user.name} </h2>
              <p>  ${user.bio} </p>
              <ul>
                     <li>${user.followers} <strong>Followers </strong> </li>
                     <li>${user.following} <strong>Following </strong> </li>
                     <li>${user.public_repos} <strong>Repository </strong> </li>
                     

              </ul>
              <div id="repos">  </div>
              
              </div>
              
              </div>
       `;
       main.innerHTML = cardHTML;
}
function createErrorCard ( msg )
{
       const cardHTML = `
              <div class= 'card'>
                     <h1>${msg}  </h1> 
              </div>
       `;
       main.innerHTML = cardHTML;
}

async function getRepos ( username )
{
       try
       {
              const { data } = await axios( APIURL + username + '/repos?sort=created' );

              addReposToCard(data);
              
       } catch ( err )
       {
              createErrorCard('poblem fetching repos')
              
       }
}
function addReposToCard ( repos )
{
       const reposEl = document.getElementById( 'repos' );
       repos.slice(0, 15).forEach( repo =>
       {
              const repoEl = document.createElement( 'a' );
              repoEl.classList.add( 'repo' );
              repoEl.href = repo.html_url;
              repoEl.target = '_blank';
              repoEl.innerText = repo.name;
              reposEl.appendChild( repoEl );
       })
}