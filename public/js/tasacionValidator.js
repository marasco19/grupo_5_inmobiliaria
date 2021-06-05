window.onload = function(){


    let formularioTasacion = document.querySelector('.formulario-tsacion');
    let listaErrores= document.querySelector(".errores_tasacion");


    let error = [];

    formularioTasacion.addEventListener("submit", function(e){
    
    if(formularioTasacion.nombre.value == ""){
        error.push("Debes ingresar un nombre y apellido <br> ");
        formularioTasacion.nombre.classList.add("is-invalid");
    }else{
        formularioTasacion.nombre.classList.add("is-valid");
    }

    if(formularioTasacion.email.value == ""){
        error.push("Debe ingresar un email valido <br>");
        formularioTasacion.email.classList.add("is-invalid");
    }else{
        formularioTasacion.email.classList.add("is-valid");
    }


    if(formularioTasacion.telefono.value == ""){
        error.push("Debe ingresar un telefono valido <br>");
        formularioTasacion.telefono.classList.add("is-invalid");
    }else{
        formularioTasacion.telefono.classList.add("is-valid");
    }

    if(errores.length > 0){
        e.preventDefault();

        listaErrores.innerHTML = "";
        for(error of errores){
            listaErrores.innerHTML += "<li>"+error+"</li>";
            listaErrores.classList.add("alert-warning");
        }
        errores=[];
    }else{
        formLogin.submit();
    }
})








}



