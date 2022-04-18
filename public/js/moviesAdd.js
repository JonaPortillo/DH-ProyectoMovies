console.log("Andando Movies Add")
window.addEventListener('load', function () {

    /* DESAFIO 3 */
    const $article = document.querySelector('article');
    const $section = document.querySelector('section');
    const $h1 = document.querySelector('h1');

    $h1.innerText += "Agregar películas";
    $h1.style.textTransform = "uppercase";
    $h1.classList.add('titulo');

    $article.classList.add('fondoTransparente');

    $section.classList.add('fondoCRUD');

    /* Agregando interacción con eventos */
    /* Desasfío 1  */
    $h1.addEventListener('mouseover', function () {
        let randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
        console.log("Color del título:" + randomColor);
        $h1.style.color = randomColor;
    })

    /* Desafío 2 */
    $input = document.querySelector('input#titulo');
    let estadoSecreto = 0;

    $input.addEventListener('keyup', function (e) {
        letra = e.key;
        switch (estadoSecreto) {
            case 0:
                if (letra == 's') {
                    estadoSecreto++;
                } else {
                    estadoSecreto = 0;
                }
                break;
            case 1:
                if (letra == 'e') {
                    estadoSecreto++;
                } else {
                    estadoSecreto = 0;
                }
                break;
            case 2:
                if (letra == 'c') {
                    estadoSecreto++;
                } else {
                    estadoSecreto = 0;
                }
                break;
            case 3:
                if (letra == 'r') {
                    estadoSecreto++;
                } else {
                    estadoSecreto = 0;
                }
                break;
            case 4:
                if (letra == 'e') {
                    estadoSecreto++;
                } else {
                    estadoSecreto = 0;
                }
                break;
            case 5:
                if (letra == 't') {
                    estadoSecreto++;
                } else {
                    estadoSecreto = 0;
                }
                break;
            case 6:
                if (letra == 'o') {
                    window.alert("SECRETO MÁGICO");
                } else {
                    estadoSecreto = 0;
                }
                break;
            default:
                break;
        }
        console.log(e.key)
    })
})