console.log("Andandoooooo")
window.addEventListener('load',function(){

    /* DESAFIO 1 */
    const $main = document.querySelector('main');
    const $p = document.querySelectorAll('p');
    const $a = document.querySelector('a');
    const $h2 = document.querySelector('h2');
    const $body = document.querySelector('body');

    let nameUser = window.prompt('Ingrese su nombre');

    $h2.innerText += (nameUser ? (" " + nameUser) : (" invitado"));
    $h2.style.textTransform = "uppercase";

    $a.style.color = "#E51B3E";

    if(window.confirm("¿Desea colocar un fondo de pantalla?")){
        $body.classList.add('fondo');
    }

    for (let i = 0; i < $p.length; i++) {
        if (i % 2 == 0) {
            $p[i].classList.add('destacadoPar');
        }else{
            $p[i].classList.add('destacadoImpar');
        }
    }

    $main.style.display = 'block';

    /* Desafio 2 */




    
})