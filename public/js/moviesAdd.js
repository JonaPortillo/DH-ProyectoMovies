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
})