window.onload = function(){
    let formLogin = document.querySelector('#login-form');
    let listaErrores= document.querySelector(".errores_login");
    
    

    let errores = [];

    formLogin.addEventListener("submit", function(e){


        if(formLogin.email.value == ""){
            errores.push("Debe ingresar un email válido <br> ");
            formLogin.email.classList.add("is-invalid");
        }else{
            formLogin.email.classList.add("is-valid");
        }

        if(formLogin.password.value == ""){
            errores.push("Debe ingresar un password <br> ");
            formLogin.password.classList.add("is-invalid");
        }else{
            formLogin.password.classList.add("is-valid");
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