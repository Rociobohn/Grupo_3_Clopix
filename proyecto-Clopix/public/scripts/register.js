const registerForm = document.forms['registerForm'];

registerForm.addEventListener('submit', function(event){
  event.preventDefault();
    let errors= false;
    //validacion de nombreCompleto
    if (this.nombreCompleto.value.length < 2){

        errors= true;
        document.getElementById('errName').innerHTML='El nombre tiene que tener más de 2 caracteres';
    } 

    /*validacion de mail*/ 
    if(!ValidateEmail(this.mail.value)){
        errors = true;
    }
    //verifica si existen errores, si no los hay envia el form
    if(errors== false){
        registerForm.submit();
    }
});

registerForm.nombreCompleto.addEventListener('keydown', nameValidate);

function nameValidate(){
    if(registerForm.nombreCompleto.value < 2 ){
        registerForm.nombreCompleto.style.borderColor= 'red';
    }else {
        registerForm.nombreCompleto.style.borderColor= 'inherit';
    }
} 

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}