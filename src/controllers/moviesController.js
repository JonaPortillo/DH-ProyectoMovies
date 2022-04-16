const db = require('../database/models/index');
let { validationResult } = require('express-validator')

module.exports = {
    list: (req, res) => {
        db.Movie.findAll()
            .then(movies => {
                res.render('moviesList.ejs', { movies })
            })
    },
    detail: (req, res) => {
        db.Movie.findByPk(req.params.id)
            .then(movie => {
                res.render('moviesDetail.ejs', { movie });
            });
    },
    new: (req, res) => {
        db.Movie.findAll({
            order: [['release_date', 'DESC']],
            limit: 7
        })
            .then(movies => {
                res.render('newestMovies', { movies });
            });
    },
    recomended: (req, res) => {
        db.Movie.findAll({
            where: {
                rating: {
                    [db.Sequelize.Op.gte]: 9
                }
            },
            order: [
                ['rating', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.render('recommendedMovies.ejs', { movies });
            });
    },
    add: (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                res.render('moviesAdd.ejs', { allGenres: genres })
            })
    },
    create: (req, res) => {
        /* let errors = validationResult(req)
        if (errors.isEmpty()) {
            res.send("sin errores");
        } else {
            res.send(errors.mapped())
        } */
        db.Movie.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre: req.body.genre
        })
            .then(() => res.redirect('/movies'))
            .catch(e => console.log(e));


    },
    edit: function (req, res) {
        // TODO
    },
    update: function (req, res) {
        // TODO
    },
    delete: function (req, res) {
        // TODO
    },
    destroy: function (req, res) {
        // TODO
    }
}