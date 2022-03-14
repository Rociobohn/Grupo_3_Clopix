const loginForm = document.forms['loginForm'];

loginForm.addEventListener('submit', function(event){
    event.preventDefault();
    let errors= false;


    //validación usuario
loginForm.user.addEventListener('keydown', userValidate);

function userValidate(){
    if(loginForm.user.value < 2 ){
        loginForm.user.style.borderColor= 'red';
    }else {
        loginForm.user.style.borderColor= 'inherit';
    }
} 

    //validación de contraseña
if (this.password.value.length < 8){
    errors= true;
    document.getElementById('errorPassword').innerHTML='La contraseña debe tener al menos 8 caracteres';
    } 
});

<script src="/scripts/login.js"> </script>