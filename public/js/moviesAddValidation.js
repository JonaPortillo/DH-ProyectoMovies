console.log("Andando MoviesAddValidation");
window.addEventListener('load', function () {

    /* Interactuando con formularios */
    /* Desafío 1 */
    let qs = (query) => document.querySelector(query);

    let $form = qs(".form");
    let $title = qs("#title");
    let $rating = qs("#rating");
    let $awards = qs("#awards");
    let $release_date = qs("#release_date");
    let $length = qs("#length");
    let $genre_id = qs("#genre_id");

    let $msgTitle = qs('.msgTitle');
    let $msgRating = qs('.msgRating');
    let $msgAwards = qs('.msgAwards');
    let $msgDate = qs('.msgDate');
    let $msgLength = qs('.msgLength');
    let $msgGenre = qs('.msgGenre');

    $title.focus();

    // Titulo
    $title.addEventListener('keyup', function (e) {
        if (this.value.length < 50) {
            this.classList.add('is-valid');
            this.classList.remove('is-invalid');
            $msgTitle.innerHTML = ""
        } else {
            this.classList.remove('is-valid');
            this.classList.add('is-invalid');
            $msgTitle.innerHTML = "El campo nombre debe ser menor a 50 caracteres"
        }
    });

    //Rating
    $rating.addEventListener('keyup', function (e) {
        if (this.value <= 10 && this.value >= 0) {
            this.classList.add('is-valid');
            this.classList.remove('is-invalid');
            $msgRating.innerHTML = ""
        } else {
            this.classList.remove('is-valid');
            this.classList.add('is-invalid');
            $msgRating.innerHTML = "El campo Calificación debe ser un número entre 0 y 10"
        }
    });

    //Awards
    $awards.addEventListener('keyup', function (e) {
        if (this.value <= 10 && this.value >= 0) {
            this.classList.add('is-valid');
            this.classList.remove('is-invalid');
            $msgAwards.innerHTML = "";
        } else {
            this.classList.remove('is-valid');
            this.classList.add('is-invalid');
            $msgAwards.innerHTML = "El campo Permios debe ser un número entre 0 y 10"
        }
    });

    //Release Date
    $release_date.addEventListener('blur', function (e) {
        if (this.value != "") {
            this.classList.add('is-valid');
            this.classList.remove('is-invalid');
            $msgDate.innerHTML = ""
        } else {
            this.classList.remove('is-valid');
            this.classList.add('is-invalid');
            $msgDate.innerHTML = "El campo Fecha de Creación es requerido"
        }
    });

    //Length
    $length.addEventListener('keyup', function (e) {
        if (this.value <= 360 && this.value >= 60) {
            this.classList.add('is-valid');
            this.classList.remove('is-invalid');
            $msgLength.innerHTML = "";
        } else {
            this.classList.remove('is-valid');
            this.classList.add('is-invalid');
            $msgLength.innerHTML = "El campo Permios debe ser un número entre 60 y 360"
        }
    });

    //Genre_id
    $genre_id.addEventListener('blur', function (e) {
        if (this.value != "") {
            this.classList.add('is-valid');
            this.classList.remove('is-invalid');
            $msgGenre.innerHTML = ""
        } else {
            this.classList.remove('is-valid');
            this.classList.add('is-invalid');
            $msgGenre.innerHTML = "El campo Género es requerido"
        }
    });


    /* Desafío 2 */

    let errores;
    let $errores = qs('.errores');
    $errores.classList.add('alert-warning');

    $form.addEventListener('submit', function (e) {
        /* Reinicio del ul y array de errores */
        $errores.innerHTML = "";
        errores = [];
        e.preventDefault();

        // Titulo
        if ($title.value.length < 1) {
            errores.push("El campo Titulo es requerido");
        } else {
            if ($title.value.length > 50) {
                errores.push("El campo nombre debe ser menor a 50 caracteres");
            }
        }
        //Rating
        if ($rating.value.length < 1) {
            errores.push("El campo Calificación es requerido");
        } else {
            if ($rating.value > 10 || $rating.value < 0) {
                errores.push("El campo Calificación debe ser un número entre 0 y 10")
            }
        }
        //Awards
        if ($awards.value.length < 1) {
            errores.push("El campo Premios es requerido");
        } else {
            if ($awards.value > 10 || $awards.value < 0) {
                errores.push("El campo Premios debe ser un número entre 0 y 10")
            }
        }

        //Release_date
        if ($release_date.value == '') {
            errores.push("El campo Fecha de Creación es requerido");
        }

        //Length
        if ($length.value.length < 1) {
            errores.push("El campo Duración es requerido");
        } else {
            if ($length.value > 360 || $length.value < 30) {
                errores.push("El campo Duración debe ser un número entre 30 y 360")
            }
        }

        //Genre_id
        if ($genre_id.value == '') {
            errores.push("El campo Género es requerido");
        }


        if (errores.length > 0) {

            for (let i = 0; i < errores.length; i++) {
                $errores.innerHTML += '<li class="is-invalid">' + errores[i] + '</li>';
            }

        } else {
            window.alert("La película se guardó satisfactoriamente")
            $form.submit();
        }
    })
})