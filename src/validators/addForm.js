const { check } = require("express-validator")

module.exports = [
    check("title")
        .notEmpty()
        .withMessage("Campo Requerido"),

    check("rating")
        .notEmpty()
        .withMessage("Campo Requerido"),

    check("awards")
        .notEmpty()
        .withMessage("Campo Requerido")
        .isNumeric("Ingrese sólo números"),

    check("release_date")
        .isDate("Ingrerse una fecha válida")
        .withMessage("Ingrese sólo números"),

    check("length")
        .notEmpty()
        .withMessage("Campo Requerido")
        .isNumeric("Ingrese sólo números"),

    check("genre_id")
        .notEmpty()
        .withMessage("Campo Requerido")
]