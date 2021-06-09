window.onload = function(){
    let formularioNew = document.getElementById('product-form');
    const inpFile = document.getElementById('fotos');
    

    let error = [];

    formularioNew.addEventListener("submit", function(e){
        
        
        if(formularioNew.titulo.value == ""){
            error.push("Debe ingresar un titulo Para la propiedad <br> ");
            formularioNew.titulo.classList.add("is-invalid");
        }else{
            formularioNew.titulo.classList.add("is-valid");
        }
        if(formularioNew.precio.value == ""){
            error.push("Debe ingresar un precio para la propiedad <br>");
            formularioNew.precio.classList.add("is-invalid");
        }else{
            formularioNew.precio.classList.add("is-valid");
        }
        if(formularioNew.direccion.value == ""){
            error.push("Debe ingresar una dirección para la propiedad <br>");
            formularioNew.direccion.classList.add("is-invalid");
        }else{
            formularioNew.direccion.classList.add("is-valid");
        }
        if(formularioNew.precio.value == "" || formularioNew.precio.value == 0){
            error.push("Debe ingresar un precio para la propiedad <br>");
            formularioNew.precio.classList.add("is-invalid");
        }else{
            formularioNew.precio.classList.add("is-valid");
        }
        if(formularioNew.barrio.value == ""){
            error.push("Debe ingresar un barrio para la propiedad <br>");
            formularioNew.barrio.classList.add("is-invalid");
        }else{
            formularioNew.barrio.classList.add("is-valid");
        }
        if(formularioNew.fotos1.value == ""){
            error.push("Debe ingresar al menos una foto para la propiedad <br>");
            formularioNew.fotos.classList.add("is-invalid");
        }else{
            formularioNew.fotos.classList.add("is-valid");
        }


        if(error.length > 0){
            e.preventDefault();
            let listaErrores= document.querySelector(".errores");
            for(erro of error){
                listaErrores.innerHTML += "<li>"+erro+"</li>";
                listaErrores.classList.add("alert-warning");
            }
            window.location.hash = '#errores';
            error=[];
        }else{
            formularioNew.submit();
        }
    })



}