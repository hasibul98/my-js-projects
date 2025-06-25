const form = document.getElementById( 'form' );
const username = document.getElementById( 'username' );
const email = document.getElementById( 'email' );
const password = document.getElementById( 'password' );
const password2 = document.getElementById( 'password2' );

let onChangeForm = false;

function showError ( input, message )
{
       const formControl = input.parentElement;
       formControl.className = "form-control error";
       const small = formControl.querySelector( 'small' );
       small.innerText = message;
       // console.log( small );
}
function showSuccess ( input )
{
       const formControl = input.parentElement;
       formControl.className = "form-control success";

}
// function isValid ( email )
// {
//        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//        return re.test( String( email ).toLocaleLowerCase() );
// }

function checkEmail ( input )
{
       const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       if ( re.test( input.value.trim() ) )
       {
              showSuccess( input );
       } else
       {
              showError( input, 'Email is not valid' );
       }

}

function checkRequired ( inputArr )
{
       inputArr.forEach( function ( input )
       {
              // console.log( input.value );
              if ( input.value.trim() === '' )
              {
                     showError( input, `${ getFieldName( input ) } is required` );
              } else
              {
                     showSuccess( input );
              }
       } );
}
function getFieldName ( input )
{
       return input.name;
}
function checkLength ( input, min, max )
{
       if ( input.value.length < min )
       {
              showError( input, `${ getFieldName( input ) } must be at least ${ min } characters` );
       } else if ( input.value.length > max )
       {
              showError( input, `${ getFieldName( input ) } must be at least ${ max } characters` );
       } else
       {
              showSuccess( input );
       }

}
function checkPasswordsMatch ( input1, input2 )
{
       if ( input1.value !== input2.value )
       {
              showError( input2, 'passwords do not match' );
       } else
       {
              showSuccess( input2 );
       }
}

form.addEventListener( 'submit', function ( e )
{
       e.preventDefault();
       checkRequired( [ username, email, password, password2 ] );
       checkLength( username, 3, 15 );
       checkLength( username, 3, 25 );
       checkEmail( email );
       checkPasswordsMatch( password, password2 );

} );











// form.addEventListener( 'submit', function ( e )
// {
//        e.preventDefault();
// console.log( 'submit' );
// console.log( username );
//        if ( username.value === '' )
//        {
//               showError( username, 'username is required' );
//        } else
//        {
//               showSuccess( username );
//        }
//        if ( email.value === '' )
//        {
//               showError( email, 'email is required' );
//        } else if ( !isValid( email.value ) )
//        {
//               showError( email, 'email is not valid' );
//        } else
//        {
//               showSuccess( email );
//        }
//        if ( password.value === '' )
//        {
//               showError( password, 'password is required' );
//        } else
//        {
//               showSuccess( password );
//        }
//        if ( password2.value === '' )
//        {
//               showError( password2, 'password2 is required' );
//        } else
//        {
//               showSuccess( password2 );
//        }





// } );
