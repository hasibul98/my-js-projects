const postsContainer = document.getElementById( 'posts-container' );
const loading = document.querySelector( '.loader' );
const filter = document.getElementById( 'filter' );


let limit = 4;
let page = 1;

async function getPost ()
{
       const res = await fetch( `https://jsonplaceholder.typicode.com/posts?_limit=${ limit }&_page=${ page }` );

       const data = await res.json();

       return data;
}

async function showPosts ()
{
       const posts = await getPost();

       posts.forEach( post =>
       {
              const postEl = document.createElement( 'div' );
              postEl.classList.add( 'post' );
              postEl.innerHTML = `
                     <div class= 'number'> ${ post.id } </div>
                     <div class='post-info'> 
                     <h2 class= 'post-title'> ${ post.title } </h2>
                     <p class= 'post-body'> ${ post.body } </p>
                     </div>
              `;
              postsContainer.appendChild( postEl );
       } );

       // console.log( posts );
}
// async function showPosts ()
// {
//        const posts = await getPost();


//        const postsHTML = posts.map( post => `
//                <div class='post'>
//                    <div class='number'>${ post.id }</div>
//                    <div class='post-info'>
//                        <h2 class='post-title'>${ post.title }</h2>
//                        <p class='post-body'>${ post.body }</p>
//                    </div>
//                </div>
//            `).join( '' );


//        postsContainer.insertAdjacentHTML( 'beforeend', postsHTML );
// }



showPosts();
function showLoading ()
{
       loading.classList.add( 'show' );
       setTimeout( () =>
       {
              loading.classList.remove( 'show' );
              setTimeout( () =>
              {
                     page++;

                     showPosts();
              }, 300 );
       }, 1000 );
}

window.addEventListener( 'scroll', () =>
{
       // console.log( document.documentElement.scrollTop );
       // console.log( document.documentElement.scrollHeight );
       // console.log( document.documentElement.clientHeight );
       const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

       if ( scrollTop + clientHeight >= scrollHeight - 5 )
       {
              // console.log( 124 );
              showLoading();
       }
} );

// window.addEventListener( 'scroll', () =>
// {
//        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

//        // নিচে গেলে নতুন পোস্ট লোড
//        if ( scrollTop + clientHeight >= scrollHeight - 5 )
//        {
//               showLoading();
//        }

//        // উপরে গেলে নিচের পোস্টগুলো ডিলিট
//        if ( scrollTop === 0 )
//        {
//               // শেষের ৪টা পোস্ট ডিলিট (limit অনুযায়ী)
//               for ( let i = 0; i < limit; i++ )
//               {
//                      const lastPost = postsContainer.lastElementChild;
//                      if ( lastPost )
//                      {
//                             postsContainer.removeChild( lastPost );
//                      }
//               }
//               // চাইলে page কমাতে পারেন, কিন্তু API থেকে আবার ডাটা আনতে হলে আরও কোড লাগবে
//        }
// } );



filter.addEventListener( 'input', filterPosts );

function filterPosts ( e )
{
       // console.log( e.target.value );
       const term = e.target.value.toUpperCase();
       const posts = document.querySelectorAll( '.post' );

       posts.forEach( ( post ) =>
       {
              const title = post.querySelector( '.post-title' ).innerText.toUpperCase();
              const body = post.querySelector( '.post-body' ).innerText.toUpperCase();

              if ( title.indexOf( term ) > -1 || body.indexOf( term ) > -1 )
              {
                     post.style.display = 'flex';

              } else
              {
                     post.style.display = 'none';
              }
       } );
}

