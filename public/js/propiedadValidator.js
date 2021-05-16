window.onload = function(){
    let formularioNew = document.querySelector('#product-form');
    

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
    

    if(error.length > 0){
        e.preventDefault();
        let listaErrores= document.querySelector(".errores");
        for(erro of error){
            listaErrores.innerHTML += "<li>"+erro+"</li>";
            listaErrores.classList.add("alert-warning");
        }
        error=[];
    }else{
        formularioNew.submit();
    }
})



}