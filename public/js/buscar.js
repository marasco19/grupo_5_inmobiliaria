window.onload = function(){
//  cuando se hace click en cada link se completa el campo input del buscar y se hace submit de la búsqueda
    document.getElementById("Recoleta").addEventListener("click", function (){ buscar("Recoleta") })
    document.getElementById("Palermo").addEventListener("click", function (){ buscar("Palermo") })
    document.getElementById("PuertoM").addEventListener("click", function (){ buscar("Puerto Madero") })
    document.getElementById("Belgrano").addEventListener("click", function (){ buscar("Belgrano") })
    document.getElementById("Caballito").addEventListener("click", function (){ buscar("Caballito") })
    document.getElementById("Canning").addEventListener("click", function (){ buscar("Canning") })
    document.getElementById("Pilar").addEventListener("click", function (){ buscar("Pilar") })
    document.getElementById("SanIsidro").addEventListener("click", function (){ buscar("San Isidro") })
    document.getElementById("Tigre").addEventListener("click", function (){ buscar("Tigre") })
    document.getElementById("Patagonia").addEventListener("click", function (){ buscar("Patagonia") })

}


function buscar(lugar) {
    document.getElementById("quicksearch").value = lugar;
    document.querySelector('#buscarForm').submit();
}


