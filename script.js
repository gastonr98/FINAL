const boton = document.querySelector(".hamburguesa");
const menu = document.querySelector("#menu");
const cerrar = document.querySelector(".cerrar");

boton.addEventListener("click", function(e){
    e.stopPropagation();
    menu.classList.toggle("activo");
});

cerrar.addEventListener("click", function(e){
    e.stopPropagation();
    menu.classList.remove("activo");
});

document.addEventListener("click", function(e){

    if(
        !menu.contains(e.target) &&
        !boton.contains(e.target)
    ){
        menu.classList.remove("activo");
    }

});