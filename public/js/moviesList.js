console.log("Andando Movies List")
window.addEventListener('load',function(){

    /* DESAFIO 2 */
    const $h1 = document.querySelector('h1');
    const $body = document.querySelector('body');

    if(window.confirm("¿Desea Modo Oscuro?")){
        $body.classList.add('fondoMoviesList');
        $body.style.backgroundColor = '#7f7f7f';
    }
    
    $h1.innerText += "Listado de Películas";
    $h1.style.textTransform = "uppercase";
    $h1.style.color = "white";
    $h1.style.backgroundColor = "teal";
    $h1.style.padding = "20px";

})