const registerForm = document.forms['mproducto'];
let error=false;

let enviar=document.querySelector("button#GuardarCambios"); ///requiero el boton del cambiar imagen para desactivarlo por defecto
enviar.disabled=true;


/**validacion del cambio de imagen!!!! */
registerForm.newImageProduct.addEventListener("change", ()=>{
    let imageValue = registerForm.newImageProduct.value;
    let extensionesAceptadas = /(.jpg|.jpeg|.png|.gif)$/i;
    console.log("el valor de la imagen es");
    console.log(imageValue);
    if(imageValue != ""){ 
        if (!extensionesAceptadas.exec(imageValue)) {
            document.querySelector('#errornewImageProduct').innerHTML= 'Formato incorrecto';
            registerForm.newImageProduct.style.borderColor= 'red';
            error= true;
        }
        else{
            registerForm.newImageProduct.style.borderColor= 'inherit';
        }
        console.log("errores valor: ");
        if(!error){
            enviar.removeAttribute("disabled"); //solo va activar el boton cuando no halla ningun error
        }
        error=false;
    }
});
registerForm.newNombre.addEventListener("blur",()=>{
    if(registerForm.newNombre.value.length<5){
        document.querySelector('#errornewNombre').innerHTML= 'el nombre debe tener al menos 5 caracteres';
        registerForm.newNombre.style.borderColor= 'red';
        enviar.disabled=true;
    }
    else{
        document.querySelector('#errornewNombre').innerHTML= '';
        registerForm.newNombre.style.borderColor= 'inherit';
        enviar.removeAttribute("disabled"); //solo va activar el boton cuando no halla ningun error
    }
});

registerForm.newDescripcion.addEventListener("blur",()=>{
    console.log("registerForm.descripcion.value");
    if(registerForm.newDescripcion.value.length<20){
        document.querySelector('#errornewDescripcion').innerHTML= 'la Descripcion debe tener al menos 20 caracteres';
        registerForm.newDescripcion.style.borderColor= 'red';
        enviar.disabled=true;
    }
    else{
        document.querySelector('#errornewDescripcion').innerHTML= '';
        registerForm.newDescripcion.style.borderColor= 'inherit';
        enviar.removeAttribute("disabled"); //solo va activar el boton cuando no halla ningun error
    }
});

registerForm.newPrice.addEventListener("blur",()=>{
    
    if(registerForm.newPrice.value<1){
        document.querySelector('#errornewPrice').innerHTML= 'el precio debe ser mayor a 0';
        registerForm.newPrice.style.borderColor= 'red';
        enviar.disabled=true;
    }
    else{
        document.querySelector('#newnewPrice').innerHTML= '';
        registerForm.newPrice.style.borderColor= 'inherit';
        enviar.removeAttribute("disabled"); //solo va activar el boton cuando no halla ningun error
    }
});
registerForm.newStock.addEventListener("blur",()=>{
    
    if(registerForm.newStock.value<1){
        document.querySelector('#errornewStock').innerHTML= 'debe existir al menos 1 unidad';
        registerForm.newStock.style.borderColor= 'red';
        enviar.disabled=true;
    }
    else{
        document.querySelector('#errornewStock').innerHTML= '';
        registerForm.newStock.style.borderColor= 'inherit';
        enviar.removeAttribute("disabled"); //solo va activar el boton cuando no halla ningun error
    }
});
