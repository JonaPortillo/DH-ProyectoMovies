const db = require('../database/models/index');
let { validationResult } = require('express-validator')

module.exports = {
    list: (req, res) => {
        db.Movie.findAll({
            include: [{
                association: 'genre'
            }]
        })
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
        console.log(req.body)
        db.Movie.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id
        })
            .then(() => res.redirect('/movies'))
            .catch(e => console.log(e));


    },
    edit: function (req, res) {
        let movieToEdit;
        db.Movie.findByPk(req.params.id, {
            include: [{
                association: 'genre'
            }]
        })
            .then(movie => {
                movieToEdit = movie;
            })
            .catch(e => console.log(e));
        db.Genre.findAll()
            .then(genres => {
                res.render('moviesEdit.ejs', { Movie: movieToEdit, allGenres: genres })
            })
            .catch(e => console.log(e));
    },
    update: function (req, res) {
        db.Movie.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id
        }, {
            where: { id: req.params.id }
        })
            .then(() => res.redirect('/movies/detail/' + req.params.id))
            .catch(e => console.log(e));
    },
    delete: function (req, res) {
        db.Movie.findByPk(req.params.id)
            .then(movie => {
                res.render('moviesDelete.ejs', { Movie: movie });
            });
    },
    destroy: function (req, res) {
        db.Movie.destroy({
            where: { id: req.params.id }
        })
            .then(() => res.redirect('/movies'))
            .catch((e) => console.log)
    }
}